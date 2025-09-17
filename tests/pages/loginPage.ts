import { Page, expect } from '@playwright/test'

export class LoginPage {
    readonly page: Page


    constructor(page: Page){
        this.page = page

    }

    async login(username: string, password: string){
        await this.page.getByPlaceholder('Username').fill(username)
        await this.page.getByPlaceholder('Password').fill(password)
        await this.page.getByRole('button', { name: 'Login' }).click()

        await expect(this.page.locator('[data-test="title"]')).toBeVisible()
    }
}
