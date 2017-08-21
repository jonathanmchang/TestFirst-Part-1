function concatString() {
    let newArr = Array.prototype.slice.call(arguments)
    // or ES6 let newArr = Array.from(arguments)
    return newArr.join('')
}

function yourFunctionRunner() {
    let funcArr = Array.from(arguments)
    let resultArr = funcArr.map(function(result){
        return result()
    })
    return resultArr.join('')
}

function makeAdder(num) {
    let returnFunction = function (value) {
        return num + value
    }
    return returnFunction
}

var once = function(func) {
    let counter = false
    return function() {
        if (!counter) {
            counter = true
            func()
        }
    }
}

var createObjectWithClosures = function() {
    let value = 0
    let obj = {}
    obj.oneIncrementer = function() {
        return value += 1
    }
    obj.tensIncrementer = function() {
        return value += 10
    }
    obj.getValue = function() {
        return value
    }
    obj.setValue = function(num) {
        value = num
    }
    return obj
}


function guestListFns(arr, code) {
    var funcArray = [];
    var closure = function(code, name) {
        return function (secretCode) {
            if (code === secretCode) {
                return name;
            } else {
                return 'Secret-Code: Invalid';
            }
        }
    }
    for (var i = 0; i < arr.length; i++) {
        var guestName = arr[i];
        funcArray.push(closure(code, guestName));
    }
    console.log(funcArray)
    return funcArray;
}

function generateGuestList(arr, code) {
    var finalList = [];
    for (var j = 0; j < arr.length; j++) {
        finalList.push(arr[j](code));
    }
    return finalList;
}

// function generateGuestList(func, code) {
//     var finalList = [];
//     var funcArray = func;
//     for (var j = 0; j < funcArray.length; j++) {
//         finalList.push(funcArray[j](code));
//     }
//     return finalList;
// }




































// function concatString() {
//     let newArr = Array.from(arguments);
//     return newArr.join('');
// }

// function yourFunctionRunner() {
//     let functionArr = Array.from(arguments);
//     let resultArr = functionArr.map(function (func) {
//         return func();
//     })
//     return resultArr.join('');
// }

// function makeAdder(num) {
//     let returnFunction = function (arg) {
//         return num + arg;
//     }
//     return returnFunction;
// }

// function once(func) {
//     let counter = false;
//     return function () {
//         if (!counter) {
//             func();
//             counter = true;
//         }
//     }
// }


// function createObjectWithClosures() {
//     let total = 0;
//     let newObj = {

//         oneIncrementer: function () {
//             total += 1;
//         },
//         tensIncrementer: function () {
//             total += 10;
//         },
//         getValue: function () {
//             return total;
//         },
//         setValue: function (arg) {
//             total = arg;
//         }
//     }


//     return newObj;
// }

// //Solution with let

// // function guestListFns(arr, code){
// //     var funcArray = [];

// //     for(var i = 0; i < arr.length; i++){
// //         let guestName = arr[i];
// //         var guestArray = function(secretCode){
// //             if(code === secretCode){
// //                 return guestName;
// //             } else {
// //                 return 'Secret-Code: Invalid';
// //             }
// //         }
// //         funcArray.push(guestArray);

// //     }
// //     console.log(funcArray)
// //     return funcArray;
// // }

// //Solution without let

// function guestListFns(arr, code) {
//     var funcArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         var guestName = arr[i];
//         funcArray.push(closure(code, guestName));
//     }
//     console.log(funcArray)
//     return funcArray;
// }

// function closure(num, name) {
//     return function (secretCode) {
//         if (num === secretCode) {
//             return name;
//         } else {
//             return 'Secret-Code: Invalid';
//         }
//     }
// }

// function generateGuestList(func, code) {
//     var finalList = [];
//     var funcArray = func;
//     for (var j = 0; j < funcArray.length; j++) {
//         finalList.push(funcArray[j](code));
//     }
//     return finalList;
// }