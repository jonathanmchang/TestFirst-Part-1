
function createCalculator() {
    let value = 0
    calculator = {}
    calculator.add = function(num) {
        value += num
    }
    calculator.subtract = function(num) {
       value -= num
    }
    calculator.value = function(num) {
        return value
    }
    calculator.clear = function() {
        value = 0
    }

    return calculator
}
