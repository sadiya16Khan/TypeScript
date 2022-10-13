interface PersonelType{
    name:string
    age:number
    city:string
} 

//In order to use anytype of datatype in object just define it by 'any' keyword//
// var PersonelInfo:any = {
//     name :"Sadiya",
//     age:30,
//     city:"Nagpur",



var PersonelInfo = {
    name :"Sadiya",
    age:30,
    city:"Nagpur",

}
      //UPDATE PROPERTY IN OBJECT//
PersonelInfo.name="Shruti";
console.log(PersonelInfo)
    

      