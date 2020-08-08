const axios = require('axios');

module.exports = async (stock) => {
    axios.get('https://finnhub.io/api/v1/quote?symbol=' + stock + '&token=' + process.env.FINNHUB_TOKEN)
        .then(function (response) {
            return response.data;
        })
        .catch(function(error) {
            return error;
        });
}