"use strict";
const USERS = new Map();
USERS.set("rs@qd1", { age: 21, name: "Chinmay" });
USERS.set("ras@gs1", { age: 31, name: "Uncle Ben" });
console.log(USERS.get("ras@gs1"));
