const speakeasy = require('speakeasy')
const qrcode = require('qrcode')
var secret=speakeasy.generateSecret({
    name:"Hexters"
})
console.log(secret)
qrcode.toDataURL(secret.otpauth_url,function(err,data){
    console.log(data)
})