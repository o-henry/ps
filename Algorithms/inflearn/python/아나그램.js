let word1 = "AbaAeCe";
let word2 = "baeeACA";

let obj1 = {};
let obj2 = {};

for (let i = 0; i < word1.length; i++) {
  obj1[word1] ? obj1[word1]++ : (obj1[word1] = 1);
  obj2[word2] ? obj2[word2]++ : (obj2[word2] = 1);
}

console.log(obj1, obj2);
