interface User {
    name: string;
    age: number;
};

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const age = sumOfAge({name: "Chinmay", age: 21}, {name: "Prakhar", age: 20});
console.log(age);