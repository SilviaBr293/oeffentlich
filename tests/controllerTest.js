const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
    // test
    it('should change fahrenheit to celcius', function () {
        expect(apiTemperature.fahrenheitToCelcius(32.0)).to.equal(0);
    })

});

describe("celsiusToFahrenheit()", function(){
    // test
    it('should change celsius to fahrenheit', function () {
        expect(apiTemperature.celsiusToFahrenheit(0.0)).to.equal(32);
    })

});