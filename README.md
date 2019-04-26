# js-http-request
Making your first http request using `request` library (which can be downloaded by running npm: `npm install request`).


# 1. Starting with our first request
First we have to use an api, for this example we will use binance api. It shows the bitcoin price, and many other details about it. There is the [link](https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT) to the api.

# 2. Coding
So now, we have to make the code. First we have to require the request library to use it.
```js
const request = require('request');
```
### After we do that, we can start coding!
```js
request('https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT', function(error, responce, body) {
            let value = JSON.parse(body);
            let price = value.lastPrice;
            let betterprice = parseFloat(price).toFixed(2);
            let percent = value.priceChangePercent;
            let betterpercent = parseFloat(percent).toFixed(2);
            if (percent > 0)
                betterpercent = "+" + betterpercent;
            console.log(`The price of bitcoin is ${betterprice} $ USD, his price changed in ${betterpercent)% `);
         ```
         
         AFter that
