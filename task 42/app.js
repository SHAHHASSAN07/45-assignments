"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
    return magicians; // Return the modified array
}
// Function to display magician names
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["bob", "jarvis", "hash"];
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Displays modified names
