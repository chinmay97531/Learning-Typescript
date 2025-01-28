"use strict";
let user2 = {
    name: "Amit",
    age: 20
};
let user1 = {
    name: "Chinmay",
    age: 21,
    address: {
        city: "LMP",
        country: "INDIA",
        pincode: 262701
    }
};
function isLegal(user) {
    var _a;
    if (((_a = user.address) === null || _a === void 0 ? void 0 : _a.country) == "INDIA") {
        return user.age > 18 ? true : false;
    }
    return false;
}
if (isLegal(user1)) {
    console.log("The age of person is greater than 18");
}
else {
    console.log("The age of person is less than equal to 18");
}
