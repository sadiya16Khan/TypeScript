"use strict";
exports.__esModule = true;
var classes = /** @class */ (function () {
    function classes(name) {
        // name="sadiya khan"      // defining property in class//
        this.name = "Sadiya"; // value from object saved here//
        // console.log("constructor called")
        this.name = name;
    }
    //     getName():void{               //defining function in class////void is used when function return nothing//
    //         console.log(this.name)
    //     }
    // }
    classes.prototype.getName = function () {
        return this.name;
    };
    return classes;
}());
var a1 = new classes("Sadiya"); //sending parameter to constructor//
console.log(a1.getName());
