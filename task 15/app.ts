let guests: string[] = ["Albert Einstein", "Imran Khan", "Altaf Bhai"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

console.log(`"Unfortunately ${guests[1]}, cant come to dinner."`);

guests[1]= "Ali Zafar";

console.log("\n  NEW LIST OF INVITATION : \n");


guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?` );
});


