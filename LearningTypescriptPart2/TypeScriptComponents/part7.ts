interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function isLegal(users: User[]){
    let ans: User[] = []
    for(let i=0; i<users.length; i++) {
        if(users[i].age >= 18){
            ans.push(users[i]);
        }
    }
    return ans;
}

let users = [
    {
        firstName: "Chinmay",
        lastName: "Mittal",
        age: 21
    },
    {
        firstName: "Amit",
        lastName: "Garg",
        age: 20
    },
    {
        firstName: "Manan",
        lastName: "Sharma",
        age: 20
    },
    {
        firstName: "Keshav",
        lastName: "Bansal",
        age: 20
    },
    {
        firstName: "Rudransh",
        lastName: "Bharadwaj",
        age: 20
    }
];


const Result = isLegal(users);
console.log(Result);