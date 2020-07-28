const axios = require('axios').default;
import {setData} from './setData'

export default function fetchCryptoDetails() {
    return function(dispatch) {
      return axios.get('http://api.coinlayer.com/api/live?access_key=c1477c02dee18b464a432c48a80c351b&symbols=BTC,ETH,XRP,BCH,USDT,LTC,EOS,BNB,BSV,XLM,BAT')
      .then(function (response) {
        let prices = {}
        for(let i in response.data.rates){
            prices[i] = 1 / response.data.rates[i]
        }
        dispatch(setData(prices))
      })
      .catch(function (error) {
        console.log(error);
      })
    };
  }