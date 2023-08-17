console.log("Hello world");

let myVariable = "Hello world";
console.log(myVariable);
myVariable = 1234;
console.log(myVariable);

const myConst = "this is a const";
console.log(myConst);

// this is a comment

let myStr = "This is a \"string\"" + myVariable;
console.log(myStr);

let templateStr = `This is a template string ${myVariable}`;
console.log(templateStr);

const strNum = "10";
const num = 1;
console.log(strNum + num);
console.log(strNum - num);

console.log(templateStr.includes("this"));
console.log(templateStr.indexOf("is"));

let city = "Miami";
console.log(city);
console.log(city[0]);
city[0] = "L";
console.log(city);
city = "Málaga";
console.log(city);

let myBoolean = true;
console.log(myBoolean);

let myNull = null;
let myUndefined;
console.log(myNull);
console.log(myUndefined);

let str = "";
if (str) {
  console.log("str es truthy");
} else {
  console.log("str es falsy");
}

let number = 10;
if (number === "10") {
  console.log("number es igual a 10");
}

let age = 20;
isOffAge = age >= 18 ? true : false;


let i = 0;
while (i <= 10) {
  console.log("while loop: ", i);
  i++;
}

for (let i = 0; i <= 10; i++) {
  console.log("for loop: ", i);
}

let hello = "Hello World";
for (const char of hello) {
  console.log(char);
}

const animals = ["dog", "cat", "bird"]
console.log(animals);
animals.push("panther");
console.log(animals);
animals.pop();
console.log(animals);
animals.unshift("elephant");
console.log(animals);
animals.shift();
console.log(animals);

animals[0] = "spider";
console.log(animals);

function toUpper(str) {
  console.log(str.toUpperCase());
}

animals.forEach(toUpper);

console.log(...animals);
const animalsCopy = [...animals];
console.log(animalsCopy);

const animals2 = animals;
animals2[0] = "horse";
console.log(animals);

animalsCopy[0] = "monkey";
console.log(animals);


const person = {
  name: "Adrián",
  city: "Málaga"
}

console.log(person);
console.log(person.name);

person.name = "David";
console.log(person);

