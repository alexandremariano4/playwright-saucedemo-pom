import { Page, expect } from '@playwright/test'

export class CheckoutPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async fillForm(){
        await this.page.getByRole('textbox', {name: 'First Name'}).fill('Automation')
        await this.page.getByRole('textbox', {name: 'Last Name'}).fill('Testing')
        await this.page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('34732126')
    }
    async finishCheckout(){
        await this.page.getByRole('button',{name: 'Continue'}).click()
        await this.page.getByRole('button',{name: 'Finish'}).click()
    }
}
