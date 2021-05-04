var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:8082' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});
