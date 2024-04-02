const unchangedMagicians: string[] = ["bob","jarvis","hash"];

const newMagicians: string[] = ["hassan","abbas",];
    

// Print original magicians
console.log("Unchanged Magicians:");
unchangedMagicians.forEach((magician, index) => {
    console.log(index + 1, magician);
});

// Print new "great" list
console.log("\nNew 'Great' List:");
unchangedMagicians.forEach((magician, index) => {
    console.log(index + 1, magician);
});
newMagicians.forEach((magician, index) => {
    console.log(index + unchangedMagicians.length + 1, magician);
});
