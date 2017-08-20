function setPropsOnObj(object) {
    object.x = 7
    object['y'] = 8
    object.onePlus = function (num) {
        return num += 1
    }
    return object
}

function setPropsOnArr(arr) {
    arr.hello = function() {
        return 'Hello!'
    }
    arr['full'] = 'stack'
    arr[0] = 5
    arr.twoTimes = function(num){
        return num * 2
    }

    return arr
}

function setPropsOnFunc(func) {
    func.year = '20??'
    func.divideByTwo = function(num) {
        return num / 2
    }
    func.prototype.helloWorld = function() {
        return 'Hello World'
    }
    return 'I am a function object, all functions are objects! Function can have their own properties too!'
}
