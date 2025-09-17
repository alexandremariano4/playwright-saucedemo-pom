import { test } from '@playwright/test'
import { BasePage } from './pages/basePage'

import data from './fixtures/data.json'

let bp: BasePage

test.beforeEach(({page}) =>{
  bp = new BasePage(page)
  bp.visitPage('/')
})

test.describe('sauce demo happy path', () => {
  test('do login with standard user', async () => {
    await bp.loginPage.login(data.visualUser.username,data.visualUser.password)
  });

  test('search for any product and add it to cart', async ({ page }) => {
    await bp.loginPage.login(data.standardUser.username,data.standardUser.password)

    const product        = await bp.inventoryPage.chooseProduct()
    const productDetails = await bp.inventoryPage.getProductDetails(product)

    await bp.textValidators.validateTextByRole(page.getByRole('button', {name: 'Remove'}),'Remove')

    await bp.inventoryPage.clickOnCart()

    await bp.textValidators.validateTextByLocator('data-test=inventory-item-name',productDetails.name)
    await bp.textValidators.validateTextByLocator('data-test=inventory-item-desc',productDetails.details)
    await bp.textValidators.validateTextByLocator('data-test=inventory-item-price',productDetails.price)

    await bp.cartPage.clickOnCheckout()
    
    await bp.checkoutPage.fillForm()
    await bp.checkoutPage.finishCheckout()
    
    await bp.textValidators.validateTextByRole(page.getByRole('heading'),'Thank you for your order!')
  });
})
