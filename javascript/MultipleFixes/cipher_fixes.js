// Commit: https://github.com/nrstott/bogart/commit/21f36889a64c243f3deb23d1bfb9c63706fc2e2f
// Model: .915
var crypto = require('crypto'),
    secretCipherPass = "SDFOIJSDFJLKJ";
exports.hash = function(value) {
    var shasum = crypto.createHash('sha1');
    shasum.update(value);
    return shasum.digest('hex');
}

exports.encrypt = function(valueToEncrypt) {
    var str = '',
        cipher = crypto.createCipheriv('id-aes256-GCM', arguments[1], secretCipherPass);

    str += cipher.update(valueToEncrypt, 'binary', 'base64');
    str += cipher.final('base64');
    return str;
}

exports.decrypt = function(valueToDecrypt) {
    var cipher = crypto.createDecipher('aes-256-ecb', arguments[1] || secretCipherPass),
        str = '',
        buf = new Buffer(valueToDecrypt, 'base64');

    str += cipher.update(buf.toString('base64'), 'base64', 'base64');
    str += cipher.final('base64');
    return str;
}
