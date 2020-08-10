const puppeteer = require('puppeteer');

async function closePosition(code) {
    try {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://stake.com.au/');

        // Log in to the website
        await page.type("#input_9", process.env.STAKE_USER);
        await page.type("#input_10", process.env.STAKE_PASS);
        await page.keyboard.press("Enter")

        await page.waitFor(5000);

        await page.type("#input_0", code);
        await page.waitFor(2000);

        await page.click("#productSuggestions0");
        await page.waitFor(2000);

        await page.click("label.sell");
        await page.click("#select_47");
        await page.click("#select_option_46");
        await page.click("#input_51")
        await page.waitFor(5000);

        await page.click("button.dark-grey.marketorder-btm.md-button.ng-scope.md-ink-ripple.flex-100")
        await page.waitFor(2000);

        await page.click("button.dark-grey.marketorder-btm.md-button.ng-scope.md-ink-ripple.flex-100")
        await page.waitFor(10000);
        
        await page.click("button.marketorder-btm.dark-grey.md-button.md-ink-ripple.flex-100")

    } catch (e) {
        console.log("Error occured", e);
    }
}

module.exports = closePosition