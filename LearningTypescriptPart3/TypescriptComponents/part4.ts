// type USersAge = {
//     [key: string]: number;
// }

type USers = Record<string, {age: number; name: string}>;

const users = {
    "rs@qd1": {age: 21, name: "Chinmay"},
    "ras@gs1": {age: 31, name: "Uncle Ben"},
}