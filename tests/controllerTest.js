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

describe("getGreetingDependOnTime()", function(){
    
     beforeEach(function () {

    })
    
    // tests YYYY-MM-DDTHH:mm:ss.sssZ
    it('should greet with "Guten Morgen"', function () {
        expect(apiTemperature.getGreetingDependOnTime('2025-01-01T08:00:00.000Z')).to.equal("Guten Morgen");
    })
    it('should greet with "Guten Abend"', function () {
        expect(apiTemperature.getGreetingDependOnTime('2025-01-01T20:00:00.000Z')).to.equal("Guten Abend");
    })
    it('should greet with "Guten Tag"', function () {
        expect(apiTemperature.getGreetingDependOnTime('2025-01-01T15:00:00.000Z')).to.equal("Guten Tag");
    })

});