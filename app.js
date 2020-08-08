require('dotenv').config();

const puppeteer = require('puppeteer');
const formatData = require('./scripts/formatData');
const getStockPrice = require('./scripts/getStockPrice');

// Get user's current stocks
let stocks = async () => {
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
    await browser.close();

    console.log('User shares captured')
    
    // Format the data in to an array of objects
    return await formatData(userShares);
};

// captures user's stock and checks position every minute
(async () => {
    // get user's stocks
    let stockList = await stocks();

    // get stock information every minute
    setInterval(function() {
        try {
            var datetime = new Date();

            if (datetime.getSeconds() == 00) {
                checkPositions(stockList);
            } 
        } catch (e) {
            console.log("Error occurred: ", e);
        }
        
    }, 1000);
})();

// Loops through each stock and determines next best move
async function checkPositions(stonkss) {
    try {
        stonkss.forEach(async element => {
            var quote = await getStockPrice(element.code);
            console.log(quote)
        });
    } catch(error) {
        console.log(error)
    }
}