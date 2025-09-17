import { Locator, Page, expect } from '@playwright/test'

export class TextValidators {

    constructor(private page: Page){
        this.page = page
    }

    async validateTextByRole(element: Locator, text: string){
        await expect(element).toHaveText(text)
    }

    async validateTextByLocator(element: string, text: string){
        await expect(this.page.locator(element)).toHaveText(text)
    }

}