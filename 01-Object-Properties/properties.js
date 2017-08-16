function setPropsOnObj(object) {
    object.x = 7
    object['y'] = 8
    object.onePlus = function(num) {
        return num + 1
    }
    return object
}

function setPropsOnArr(arrayObject) {
    arrayObject.hello = function() {
        return "Hello!"
    }
    arrayObject['full'] = 'stack'
    arrayObject[0] = 5
    arrayObject.twoTimes = function(num) {
        return num * 2
    }
}

function functionObject() {
    
}

function setPropsOnFunc(obj) {
    obj.year = '20??'
    obj.divideByTwo = function(num) {
        return num / 2
    }
    obj.prototype.helloWorld = function() {
        return 'Hello World'     
    }
}

