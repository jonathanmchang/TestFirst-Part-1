function RPNCalculator() {
    this.calcArr = []
    }
    
RPNCalculator.prototype.push = function(num) {
    this.calcArr.push(num)
}

RPNCalculator.prototype.toThrow = function (arr) {
    if (this.calcArr.length < 2) {
        throw "rpnCalculatorInstance is empty"
    }
}
RPNCalculator.prototype.plus = function() {
    this.toThrow()
    var sum1 = this.calcArr.pop()
    var sum2 = this.calcArr.pop()
    var sumTotal = sum1 + sum2
    this.calcArr.push(sumTotal)
}
RPNCalculator.prototype.minus = function(arr) {
    this.toThrow()
    var sub1 = this.calcArr.pop()
    var sub2 = this.calcArr.pop()
    var subTotal = sub2 - sub1
    this.calcArr.push(subTotal)
}
RPNCalculator.prototype.times = function (arr) {
    this.toThrow()
    var times1 = this.calcArr.pop()
    var times2 = this.calcArr.pop()
    var timesTotal = times1 * times2
    this.calcArr.push(timesTotal)
}
RPNCalculator.prototype.divide = function (arr) {
    this.toThrow()
    var divide1 = this.calcArr.pop()
    var divide2 = this.calcArr.pop()
    var divideTotal = divide2 / divide1
    this.calcArr.push(divideTotal)
}

RPNCalculator.prototype.value = function () {
    return this.calcArr[this.calcArr.length - 1]
}



   