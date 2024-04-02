"use strict";
//  version that passes
let alien_color = "blue";
if (alien_color == "blue") {
    console.log("You just earned 15 points!");
}
// Version that fails (no output):
alien_color = "red";
if (alien_color == "black") {
    // No output because the condition is false
}
