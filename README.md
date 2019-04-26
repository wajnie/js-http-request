# js-http-request
Making your first http request using `request` library (which can be downloaded by running npm: `npm install request`).


# 1. Starting with your first request
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
            console.log(`The price of bitcoin is ${betterprice} $ USD, his price changed in ${betterpercent)%`);
          });
```
This code should show us the price of the bitcoin and how many % was it cheaper/more expensive.

# 3. Explanation
```js
// Here, we request the api with our 3 arguments (error, responce and body)
request('https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT', function(error, responce, body) {
// Now we parse the json because it converts text to json
            let value = JSON.parse(body);
// There we read the lastPrice of our body
            let price = value.lastPrice;
// This let is made to make the price look better. In practice it looks like this 5000.25 instead of 5000.25000000100002. That's why we are .toFixing() it
            let betterprice = parseFloat(price).toFixed(2);
// There we read the priceChangePercent of our body
            let percent = value.priceChangePercent;
// Again like before, we are making the percent look better
            let betterpercent = parseFloat(percent).toFixed(2);
// And there is our simple if, which check is percent higher than 0. If is then do +2% instead of 2% to make it look prettier.
            if (percent > 0)
                betterpercent = "+" + betterpercent;
// Output, nothing to explain. We just console.log it.
            console.log(`The price of bitcoin is ${betterprice} $ USD, his price changed in ${betterpercent)%`);
           });
```
# 4. Autorefresh the price
To do that we need to use `setInterval(function()` function, which will set the timeout to our code.
```js
 setInterval(function() {
request('https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT', function(error, responce, body) {
            let value = JSON.parse(body);
            let price = value.lastPrice;
            let betterprice = parseFloat(price).toFixed(2);
            let percent = value.priceChangePercent;
            let betterpercent = parseFloat(percent).toFixed(2);
            if (percent > 0)
                betterpercent = "+" + betterpercent;
            console.log(`The price of bitcoin is ${betterprice} $ USD, his price changed in ${betterpercent)%`);
          });
         }, 10000) // There is our timeout to let the request execute again, in milliseconds. If you want to change it for example to 5 seconds then replace it with 5000.
 ```
 
 That was it! Be creative and find other cool api's that you can do request on! Good luck.
