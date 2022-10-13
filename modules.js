"use strict";
//MODULES in TypeScript:- enables to write functions with same name in different modules//
exports.__esModule = true;
var studentModule_1 = require("./studentModule"); //we can use any name in place of studentLogin nd teacherLogin//
var teacherModule_1 = require("./teacherModule");
var student = new studentModule_1["default"]();
console.log(student.data);
var teacher = new teacherModule_1["default"]();
console.log(teacher.data);
