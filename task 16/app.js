"use strict";
let guests = ["Albert Einstein", "Imran Khan", "Altaf Bhai"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Nawaz Sharif");
guests.push("Ada Lovelace");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
