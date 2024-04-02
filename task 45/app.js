"use strict";
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model }; // Initialize car object with manufacturer and model
    options.forEach(([key, value]) => car[key] = value); // Iterate through options and set key-value pairs
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
