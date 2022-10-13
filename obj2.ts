  //Defining datatype of function in a object//
  interface PersonelType{
    name:string
    age:number
    city:string
    getCity:()=>string
} 

var PersonelInfo = {
    name: "Sadiya",
    age: 30,
    city: "Nagpur",
    getCity:function(){
        return"Nagpur"
    }

};
console.log(PersonelInfo.city)
