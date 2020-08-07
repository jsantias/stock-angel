require('dotenv').config();

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://stake.com.au/');
    console.log()

    await page.type("#input_9", process.env.STAKE_USER);
    await page.type("#input_10", process.env.STAKE_PASS);
    await page.keyboard.press("Enter")

    await page.waitFor(5000);
    await page.goto('http://stake.com.au/dashboard/portfolio');

    const data = await page.evaluate(() => {
        var tds = Array.from(document.querySelectorAll('table tr td'))

        tds =  tds.map(td => td.innerText);
        return tds.filter(element => element != '')
    });

    console.log(data);

    //   await browser.close();
})();