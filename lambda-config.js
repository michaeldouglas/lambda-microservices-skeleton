module.exports = {
    region: 'us-east-1',
    handler: 'index.handler',
    role: 'arn:aws:iam::525203983100:role/lambdaPowerUser',
    functionName: 'lambda-tab-media',
    timeout: 60,
    queue: 'https://sqs.us-east-1.amazonaws.com/525203983100/videoProcessQueue',
    task: 'videoThumbnailProcess:3'
}