const axios = require('axios').default;
import {setData} from './setData'

export default function fetchConversionDetails() {
    return function(dispatch) {
      return axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(function (response) {
        dispatch(setData(response.data.rates))
      })
      .catch(function (error) {
        console.log(error);
      })
    };
  }