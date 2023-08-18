console.log("Async js");

// const timeoutId = setTimeout(() => {
//   console.log("This is inside the timeout");
// }, 2000);

// console.log("timeout id: ", timeoutId);
// clearTimeout(timeoutId);

// let i = 0;
// const intervalId = setInterval(() => {
//   console.log("inside the interval");
//   i++;
//   console.log(i);

//   if (i >= 10) clearInterval(intervalId);
// }, 1000);



const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

// function getDirections(step, callback, errorCallback) {
//   setTimeout(() => {
//     console.log(directions[step]);

//     if (!directions[step]) errorCallback("Instructions not found.");
//     else callback();
//   }, 2000);
// }

// getDirections(0, () => {
//   getDirections(1, () => {
//     getDirections(2, () => {
//       getDirections(3, () => {
//         console.log("You have reached your destination");
//       }, () => console.log("Something was wrong"))
//     }, () => console.log("Something was wrong"))
//   }, () => console.log("Something was wrong"))
// }, () => console.log("Something was wrong"))



function obtainDirections(step) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(directions[step]);

      if (!directions[step]) reject("Instructions not found.");
      else resolve();
    }, 2000);
  });
}



// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => console.log("You have reached your destination"))
//   .catch(() => console.log("something was wrong"))



async function getFood() {
  try {
    await obtainDirections(0);
    await obtainDirections(1);
    await obtainDirections(2);
    await obtainDirections(3);
    console.log("You have reached your destination");
  } catch (e) {
    console.log("Something was wrong");
  }
}

getFood();



async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  const data = await response.json();
  console.log(data.name);
}

fetchPokemon();