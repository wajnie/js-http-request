const request = require('request');
request('https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT', function(error, responce, body) {
            let value = JSON.parse(body);
            let price = value.lastPrice;
            let betterprice = parseFloat(price).toFixed(2);
            let percent = value.priceChangePercent;
            let betterpercent = parseFloat(percent).toFixed(2);
            if (percent > 0)
                betterpercent = "+" + betterpercent;
            console.log(`The price of bitcoin is ${betterprice} $ USD, his price changed in ${betterpercent}%`);
          });