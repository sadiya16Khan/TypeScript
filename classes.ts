//Classes in TypeScript//
export{}
class classes{              //names of class and files are same usually//
   
    // name="sadiya khan"      // defining property in class//
    name:string="Sadiya"                      // value from object saved here//

constructor(name:string){                       
    // console.log("constructor called")
    this.name= name
}



//     getName():void{               //defining function in class////void is used when function return nothing//
//         console.log(this.name)
//     }
// }
    getName():string{               //defining function in class//
        return this.name
    }
}

let a1=new classes("Sadiya");   //sending parameter to constructor//
console.log(a1.getName());