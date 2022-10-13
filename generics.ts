//  GENERICS in TypeScript:- it is a special type of data type,which is used in a reusable function. 
//   It allows to define multiple datatypes for same function.it always returns same value as assined

function users<T>(data:T):T{      //"T" here is a generic data type ,which allow us to pass values of different datatypes//
    return data 
}

console.log(users({name:"sadiya", age:30}))   //here we can have any kind of data type instead of object//