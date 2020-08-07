require('dotenv').config();

const puppeteer = require('puppeteer');
const formatData = require('./scripts/formatData');

(async () => {

    // Launch a new browser and redirect to website
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://stake.com.au/');

    // Log in to the website
    await page.type("#input_9", process.env.STAKE_USER);
    await page.type("#input_10", process.env.STAKE_PASS);
    await page.keyboard.press("Enter")

    await page.waitFor(5000);
    await page.goto('http://stake.com.au/dashboard/portfolio');

    // Get the user's shares
    const userShares = await page.evaluate(() => {
        var tds = Array.from(document.querySelectorAll('table tr td'))

        tds =  tds.map(td => td.innerText);
        return tds.filter(element => element != '')
    });
    
    // Format the data in to an array of objects
    let stocks = await formatData(userShares);

    await browser.close();
})();