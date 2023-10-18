const speakeasy = require('speakeasy')

var verified =speakeasy.totp.verify({
    secret:'FaGV2VgqvRRhTAy0b&.c>OvKapkv{sM)',
    encoding:'ascii',
    token:'732040' //token changes depends upon tht generated code
})
console.log(verified)