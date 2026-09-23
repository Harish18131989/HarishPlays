export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async getUrl() {
        return this.page.url();
    }

    async takeScreenshot(name) {
        await this.page.screenshot({
            path: `test-results/${name}.png`,
            fullPage: true
        });
    }
}