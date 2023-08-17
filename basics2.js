console.log("Basics 2!");


function sayHello(name) {
  console.log(`Hello ${name}!`);
}

sayHello("Adrián");


const sayGoodbye = function (name) {
  console.log(`goodbye ${name}!`);
}

sayGoodbye("Adrián");
console.log(sayGoodbye);


const sayTheCity = (city) => {
  console.log("The city is: ", city);
}
sayTheCity("Málaga");

const sum = (num1, num2) => num1 + num2;
console.log(sum(3, 4));

const toUpper = str => str.toUpperCase();
console.log(toUpper("patata"));

const sayHelloWorld = () => console.log("Hello World");
sayHelloWorld();



function functionCaller(callback) {
  console.log("This is inside the function caller");
  callback();
}

const f1 = () => {
  console.log("I'm the function 1");
}

const f2 = () => {
  console.log("I'm the function 2");
}

functionCaller(f1);
functionCaller(f2);

functionCaller(() => {
  console.log("This is an anonymous function as a callback");
})



// setTimeout(() => {
//   console.log("This is inside the timeout");
// }, 2000);



const countries = ["Puerto Rico", "España", "EEUU", "Francia"];

countries.forEach((country) => {
  console.log(country, country.length);
})

const upperCaseCountries = countries.map((country) => {
  return country.toUpperCase();
})
console.log(upperCaseCountries);

const countriesLength = countries.map(country => country.length)
console.log(countriesLength);

const filteredCountries = countries.filter((country) => {
  if (country.length > 5) return country;
})
console.log(filteredCountries);


const movies = [
  {
    title: "Lord of the Rings",
    duration: 300,
    rating: 9.5
  },
  {
    title: "Harry Potter",
    duration: 120,
    rating: 8
  },
  {
    title: "Jurasic Park",
    duration: 150,
    rating: 8.5
  }
]

console.log(movies);

const highRatedMovies = movies.filter((movie) => {
  if (movie.rating >= 9) return movie
})
console.log(highRatedMovies);



const numbers = [1, 2, 3, 4, 5];

const sumResult = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0)
console.log(sumResult);

const multiplyResult = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1)
console.log(multiplyResult);

const countriesString = countries.reduce((acc, curr) => {
  return acc + curr;
}, "")
console.log(countriesString);

const ratingsSum = movies.reduce((acc, curr) => {
  return acc + curr.rating
}, 0)
console.log(ratingsSum / movies.length);




const numArray = [1, 4, 2, 11, 42];
numArray.sort((a, b) => {
  return b - a;
});

console.log(numArray);

countries.sort((a, b) => {
  return b.length - a.length;
})
console.log(countries);


movies.sort((a, b) => {
  return a.duration - b.duration;
})
console.log(movies);


console.log(numArray.reverse());
console.log(countries.reverse());
console.log(movies.reverse());