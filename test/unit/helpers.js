import chai from 'chai';
import td from 'testdouble';
import expect from 'chai';
import moment from 'moment';
import aws from'aws-sdk';

// Configurações para rodar AWS nos testes.
aws.config.update({region: 'us-east-1'});
let cloudwatchlogs = new aws.CloudWatchLogs({apiVersion: '2017-05-16'});

global.expect = chai.expect;
global.td = td;
global.expect = expect.expect;
global.moment = moment;
global.cloudwatchlogs = cloudwatchlogs;