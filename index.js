let CloudWatch = require('./lib/CloudWatch');
let async = require('async');
moment = require('moment');

exports.handler = (event, context, callback) => {
    async.waterfall([
            function (callback) {
                let logStreamName = moment().format('YYYY-MM-DD-HHmmss.SSS');

                cloudwatchlogs.createLogStream(
                    {
                        logGroupName: 'tab-media',
                        logStreamName: logStreamName
                    },
                    function (err, data) {
                        if (err) {
                            logStreamName = null;
                        } else {
                            logCloudWatch = new CloudWatch(logStreamName);
                        }
                        callback(null);
                    }
                );
            },
            function (callback) {
                logCloudWatch.log('teste');

                callback(null);
            },
        ],
        function (err) {
            if (err) {
                callback(null, 'An error has occurred: ' + err.message);
            } else {
                callback(null, 'Successfully processed TabMedia.');
            }
        });
};