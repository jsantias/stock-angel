require('dotenv').config();

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://stake.com.au/');

    await page.type("#input_9", process.env.STAKE_USER);
    await page.type("#input_10", process.env.STAKE_PASS);
    await page.keyboard.press("Enter")
    //   await browser.close();
})();