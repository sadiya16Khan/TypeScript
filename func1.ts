//Functions in TypeScript//
export {}
function num():number{         //():number is the datatype of  value that will be return//
    return 100
}
 console.log(num())


 //defining datatype of parameters//

 function add(a:number ,b:number): number {
      return a+b
 }

 console.log(add(30,30))

 // declaration of optional parameter//

 function add1(a:number ,b?:number): number {   // here '?' stands for optional sign(b is an optional parameter)
    return b?a+b:a   //?: if else condition//
}

console.log(add1(50,30))
