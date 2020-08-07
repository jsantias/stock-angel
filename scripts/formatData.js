// stock JSON model
let stock = require('../models/stock.json');

module.exports = (sharesArray) => {

    var x = 0;
    var shares = [];

    for (var i = 0; i < sharesArray.length; i++) {
        if (sharesArray[i] !== 'Trade') {
            switch (x) {
                case 0:
                    stock.code = sharesArray[i];
                    break;
                case 1:
                    stock.units = sharesArray[i];
                    break;
                case 2:
                    stock.avgPrice = sharesArray[i];
                    break;
                case 3:
                    stock.lastPrice = sharesArray[i];
                    break;
                case 4:
                    stock.value = sharesArray[i];
                    break;
                case 5:
                    stock.dayReturn = sharesArray[i];
                    break;
                case 6:
                    stock.totalReturn = sharesArray[i];
                    break;
                default:
                    break;
            }
            x++;
        } else {
            x = 0;
            shares.push(stock);
        }
    }
    return shares;

}