module.exports = (sharesArray) => {

    var x = 0;
    var shares = [];
    var newStock = new Object();

    for (var i = 0; i < sharesArray.length; i++) {
        if (sharesArray[i] !== 'Trade') {
            switch (x) {
                case 0:
                    newStock.code = sharesArray[i];
                    break;
                case 1:
                    newStock.units = sharesArray[i];
                    break;
                case 2:
                    newStock.avgPrice = sharesArray[i];
                    break;
                case 3:
                    newStock.lastPrice = sharesArray[i];
                    break;
                case 4:
                    newStock.value = sharesArray[i];
                    break;
                case 5:
                    newStock.dayReturn = sharesArray[i];
                    break;
                case 6:
                    newStock.totalReturn = sharesArray[i];
                    break;
                default:
                    break;
            }
            x++;
        } else {
            x = 0;
            shares.push(newStock);
            newStock = new Object();
        }
    }
    return shares;

}