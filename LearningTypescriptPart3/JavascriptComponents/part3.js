"use strict";
const user = {
    name: "Chinmay",
    age: 21
};
// user.name = "Prakhar"  // If it is not readonly then typescript does not complain about it.
console.log(user.name);
