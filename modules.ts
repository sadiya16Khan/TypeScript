//MODULES in TypeScript:- enables to write functions with same name in different modules//

import studentLogin from "./studentModule";    //we can use any name in place of studentLogin nd teacherLogin//
import teacherLogin from "./teacherModule";

let student=new studentLogin();
console.log(student.data)

let teacher=new teacherLogin();
console.log(teacher.data)