const lambdaLocal = require('lambda-local');
var path = require('path');

var jsonPayload = {
    'key': 1,
    'another_key': "Some text"
}

lambdaLocal.execute({
    event: jsonPayload,
    lambdaPath: path.join(__dirname, './../index.js'),
    profilePath: '~/.aws/credentials',
    profileName: 'default',
    timeoutMs: 8000,
    callback: function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
});