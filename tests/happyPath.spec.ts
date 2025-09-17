import { test, expect } from '@playwright/test'

test('do login with standard user', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="title"]')).toBeVisible()

});

test('search for any product and add it to cart', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('data-test=username').fill('standard_user')
  await page.locator('data-test=password').fill('secret_sauce')
  await page.locator('data-test=login-button').click()
  
  await expect(page.locator('data-test=title')).toBeVisible();


  const allProducts     = page.locator('data-test=inventory-item')
  const count           = await  allProducts.count()
  const randomIndex     = Math.floor(Math.random() * count)

  const specificProduct = allProducts.nth(randomIndex)
  
  await specificProduct.getByRole('button', {name: 'Add to cart'}).click()

  const productName    = await specificProduct.locator('data-test=inventory-item-name').innerText()
  const prodcutDetails = await specificProduct.locator('data-test=inventory-item-desc').innerText()
  const productPrice   = await specificProduct.locator('data-test=inventory-item-price').innerText()

  await expect(page.getByRole('button', {name: 'Remove'})).toHaveText('Remove')
  
  await page.locator('.shopping_cart_container').click({force: true})


  await expect(page.locator('data-test=inventory-item-name')).toHaveText(productName)
  await expect(page.locator('data-test=inventory-item-desc')).toHaveText(prodcutDetails)
  await expect(page.locator('data-test=inventory-item-price')).toHaveText(productPrice)
  
  await page.getByRole('button',{name: 'Checkout'}).click()
  
  await page.getByRole('textbox', {name: 'First Name'}).fill('Automation')
  await page.getByRole('textbox', {name: 'Last Name'}).fill('Testing')
  await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('34732126')
  
  await page.getByRole('button',{name: 'Continue'}).click()
  await page.getByRole('button',{name: 'Finish'}).click()
  
  await expect(page.getByRole('heading')).toHaveText('Thank you for your order!')
});

