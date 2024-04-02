"use strict";
function make_pant(size = "medium", message = "I love TypeScript") {
    console.log(`Making a ${size} pant with the message "${message}" printed on it.`);
}
make_pant(); // Default large and message
make_pant("small"); // Default message, medium size
make_pant("large", "Dive into Coding"); // Custom message, small size
