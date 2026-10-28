exports.celsiusToFahrenheit = function (celsius){
 return celsius*(9/5)+32
}

exports.fahrenheitToCelcius = function (fahrenheit){
 if (true) {
    return ((fahrenheit-32)/(5/9))
 }   
}

exports.getGreetingDependOnTime =  function (myDate) {
    let timeBegin = '05';
    let timeMoon= '12';
    let timeEnd = '19';
    
    const dateCurrent = new Date(myDate);

    if (timeBegin < dateCurrent.getHours()) {
        if (timeEnd < dateCurrent.getHours()) {
            return "Guten Abend"
        }
        else if (timeMoon < dateCurrent.getHours() && timeEnd > dateCurrent.getHours()) {
            return "Guten Tag"
        }
        else {
            return "Guten Morgen"
        }
    } else {
        //newVariable = dateCurrent.getTime()
        console.log("For debugging: ") + timeBegin + " " + dateCurrent.getTime() + " " + timeEnd
        return "Guten Tag"
    }
}