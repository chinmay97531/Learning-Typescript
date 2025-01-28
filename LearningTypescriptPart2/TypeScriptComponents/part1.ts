interface User {
    name: string;
    age: number;
    address?: {
        city: string;
        country: string;
        pincode: number;
    };
}

let user2: User = {
    name: "Amit",
    age: 20
}

let user1: User = {
    name: "Chinmay",
    age: 21,
    address: {
        city: "LMP",
        country: "INDIA",
        pincode: 262701
    }
}

function isLegal(user: User): boolean {
    if(user.address?.country == "INDIA") {
        return user.age > 18 ? true : false;
    }
    return false;
}

if(isLegal(user1)) {
    console.log("The age of person is greater than 18");
}
else{
    console.log("The age of person is less than equal to 18")
}