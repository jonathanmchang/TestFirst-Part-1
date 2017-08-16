function createCalculator() {
    var value = 0;
    calculator = {};
    calculator.value = function () {
        return value;
    }
    calculator.add = function (num) {
        value += num;
        return value;
    }
    calculator.subtract = function (num) {
        value -= num;
    }
    calculator.clear = function () {
        value = 0;
    }
    return calculator;
}
