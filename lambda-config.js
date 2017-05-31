module.exports = {
    region: 'us-east-1',
    handler: 'index.handler',
    role: 'arn:aws:iam::525203983100:role/lambdaPowerUser',
    functionName: 'some-function', //Remember: of change this here line. for the your function AWS lambda
    timeout: 60
}