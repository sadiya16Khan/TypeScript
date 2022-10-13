          //Inheritance in TypeScript//
class Parent{
    
    // name="Sadiya Khan";
    name:string                         //*storing here *//
    setName(name):void{               //*receieving here */
        this.name=name
    }

}

    export {}
    class Child extends Parent{       //extends parent is used to call the property of parent class in child class//
    // name="Sadiya Khan";
    getName():string{
        return this.name
    }
}

let c1=new Child();
c1.setName("Gauhar Khan")       //*passing from here*//
console.log(c1.getName());