// imported fetch
const fetch = require('node-fetch');

// created function with promise that creates an array of urls for residents of Tatooine
function getTatooineResidents() {
    const result = fetch("https://swapi.co/api/planets/1/")
        .then(response => response.json())
        .then(tatooine => tatooine.residents)
        .catch(error => console.log(error))
    return result;
}

// created promise with resolve and reject
function promiseMeAString(value) {
    const promise = new Promise((resolve, reject) => {
        if (typeof value === 'string') {
            resolve("You kept the Promise!");
        } else {
            reject("You have failed me!");
        }
    })
    return promise;
}

// exported the functions
module.exports = {
    getTatooineResidents,
    promiseMeAString
}