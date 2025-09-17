import { Locator, Page } from '@playwright/test'



export class Functions {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

}
