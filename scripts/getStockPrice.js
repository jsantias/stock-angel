const axios = require('axios');

module.exports = async (stock) => {
    return new Promise((resolve, reject) => {
        axios({
                method: 'get',
                url: 'https://finnhub.io/api/v1/quote',
                params: {
                    symbol: stock,
                    token: process.env.FINNHUB_TOKEN
                }
        })
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function(error) {
            reject(error);
        });
    });
    
}