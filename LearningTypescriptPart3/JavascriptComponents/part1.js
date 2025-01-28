"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Chinmay", age: 21 }, { name: "Prakhar", age: 20 });
console.log(age);
