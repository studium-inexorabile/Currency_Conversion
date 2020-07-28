const fs = require('fs');
let data = JSON.parse(fs.readFileSync('countryCodes.json'))
let codes = Object.keys(data).map((item)=>({"code": item, "country": data[item]}))