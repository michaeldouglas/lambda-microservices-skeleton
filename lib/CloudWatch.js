let config = require("./../lambda-config.js");
let aws = require('aws-sdk');
aws.config.update({region: config.region});
cloudwatchlogs = new aws.CloudWatchLogs({apiVersion: '2017-05-16'});

class CloudWatch{
    constructor(logStreamName){
        this.logGroupName = 'tab-media';
        this.logStreamName = logStreamName;
        this.nextSequenceToken = null;
    }

    log(message) {
        if (null != this.logStreamName) {
            var params = {
                logEvents: [
                    {
                        message: message,
                        timestamp: moment().valueOf()
                    }
                ],
                logGroupName: this.logGroupName,
                logStreamName: this.logStreamName
            };

            if (null !== this.nextSequenceToken) {
                params.sequenceToken = this.nextSequenceToken;
            }

            cloudwatchlogs.putLogEvents(
                params,
                function(err, data) {
                    if (!err) {
                        this.nextSequenceToken = data.nextSequenceToken;
                    }
                }
            );
        }
    }
}

module.exports = CloudWatch;