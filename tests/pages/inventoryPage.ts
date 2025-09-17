import { Locator , Page, expect } from '@playwright/test'

export class InventoryPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async chooseProduct(){
        const allProducts     = this.page.locator('data-test=inventory-item')
        const count           = await  allProducts.count()
        const randomIndex     = Math.floor(Math.random() * count)

        const specificProduct = allProducts.nth(randomIndex)
        
        await specificProduct.getByRole('button', {name: 'Add to cart'}).click()

        return specificProduct
    }

    async getProductDetails(product: Locator){
        const productName    = await product.locator('data-test=inventory-item-name').innerText()
        const prodcutDetails = await product.locator('data-test=inventory-item-desc').innerText()
        const productPrice   = await product.locator('data-test=inventory-item-price').innerText()
        
        const productDetails = {
            name: productName,
            details: prodcutDetails,
            price: productPrice
        }

        return productDetails
    }

    async clickOnCart(){
        await this.page.locator('.shopping_cart_container').click({force: true})
    }
}
