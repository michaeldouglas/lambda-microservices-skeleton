import SomeLibrary from '../../../lib/SomeLibrary';

describe('Some: Object', () => {
    describe('verify if exist the Some: Object', () => {
        it('expect the response the a object', function() {
		    expect(SomeLibrary).to.exist
	    });

        it('should have a handler', function() {
            let logStreamName = '2017-05-16-203130.527';

            const cloudwatchlogs = {
                createLogStream: td.function(),
            };

            const expectedResponse = [{
                logGroupName: 'some-library',
                logStreamName: logStreamName,
            }];

            td.when(cloudwatchlogs.createLogStream({})).thenResolve(expectedResponse);

            const SomeLibrary = new SomeLibrary(logStreamName);
            SomeLibrary.log('Test Some Library');
            
		    expect(SomeLibrary.nextSequenceToken).to.equal(null);
	    });
    });
});