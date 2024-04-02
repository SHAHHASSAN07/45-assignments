"use strict";
// console.log("Unfortunately, I can only invite two people for dinner.");
// while (guests.length > 2) {
//     let removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// });
// guests.splice(0, guests.length);
// console.log(guests); 
// Original guest list
const originalGuestList = ["Albert Einstein", "Imran Khan"];
// Shrink the guest list to only two guests
const finalGuestList = originalGuestList.slice(0, 2);
// Print the final guest list
console.log("Final Guest List (Only two guests allowed):");
finalGuestList.forEach((guest, index) => {
    console.log(index + 1, guest);
});
