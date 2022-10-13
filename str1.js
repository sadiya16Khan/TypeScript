var biggestWord = "I AM FROM INDIA";
var result = biggestWord.split("").join("").split(" ").reduce(function (acc, cur) { return (acc.length > cur.length ? acc : cur); });
console.log(result);
