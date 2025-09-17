import { Page } from '@playwright/test'
import { LoginPage } from './loginPage'
import { InventoryPage } from './inventoryPage'
import { CartPage } from './cartPage'
import { CheckoutPage } from './checkoutPage'
import { TextValidators } from '../helpers/textValidators'


export class BasePage {
    readonly loginPage: LoginPage
    readonly inventoryPage: InventoryPage
    readonly cartPage: CartPage
    readonly checkoutPage: CheckoutPage
    readonly textValidators: TextValidators 
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.inventoryPage = new InventoryPage(page)
        this.cartPage = new CartPage(page)
        this.checkoutPage = new CheckoutPage(page)
        this.textValidators = new TextValidators(page)
    }

    async visitPage(url : string){
        await this.page.goto(url);
    }
}
