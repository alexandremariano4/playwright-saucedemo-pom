import { Page, expect } from '@playwright/test'
import { Functions } from '../helpers/functions'

export class LoginPage {
    readonly page: Page
    readonly func: Functions

    constructor(page: Page){
        this.page = page
        this.func = new Functions(page)
    }

    async login(username: string, password: string){
        await this.page.getByPlaceholder('Username').fill(username)
        await this.page.getByPlaceholder('Password').fill(password)
        await this.page.getByRole('button', { name: 'Login' }).click()

        await expect(this.func.isElementVisible('[data-test="title"]')).toBeTruthy()
    }
}
