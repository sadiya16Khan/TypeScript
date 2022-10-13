var biggestWord :string="I AM FROM INDIA";

var result =biggestWord.split("").join("").split(" ").reduce((acc,cur)=>(acc.length>cur.length?acc:cur));

console.log(result)