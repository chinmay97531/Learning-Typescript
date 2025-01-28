interface Admin {
    name: string;
    permissions: string;
}

interface User {
    name: string;
    age: number;
}

type UserOrAdmin = User | Admin;   //union
type UserAndAdmin = User & Admin;  //intersection

function greet(user: UserOrAdmin) {
    console.log(user.name);
}