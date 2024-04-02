"use strict";
let person_name = "HaSSan kHaN";
console.log(`Name in Uppercase : ${person_name.toUpperCase()}`);
console.log(`Name in lowercase : ${person_name.toLowerCase()}`);
let titlecaseName = person_name.replace(/\b\w/g, c => c.toLowerCase());
console.log(`Name in titlecase : ${titlecaseName}`);
