let isActive: boolean = true;
let hasError: boolean = false;

isActive = false;
hasError = true;

const canAccess: boolean = isActive && !hasError;

console.log(canAccess);

let age: number = 20;
let price: number = 5000;
let count: number = -7;

age = 35;
price = 1000;
count = 3;

const total: number = price * count;
const average: number = total / age;
console.log(total);

let nombre: string = "Jhonny Deep";
let message: string = "Hello Jhonny!";
let description: string = `This is a little description`;

nombre = 'Jhonny Deep';
message = "you´re welcome!";

const fullName: string = nombre + ' ' + message;
const greeting: string = `${nombre}, ${message}`;

let binary: number = 0b101001;
let mask: number = 0b101010100;

const resultado: number = binary | mask;

console.log(resultado);

let hexColor: number = 0xFF0F00FF;
let flags: number = 0xF00EA5;

const mixedColor: number = hexColor & flags;

let numbers: number[] = [1, 2, 3];
let names: string[] = ['Johnny', 'Samuel', 'Maria'];

console.log(numbers[0]);
console.log(names[2]);

numbers.push(6);

const len: number = numbers.length;

let person: [string, number, boolean];
person = ['Julieta', 15, false];

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

let coordinate: [number, number];
coordinate = [14.5, 28.3];

console.log(coordinate[0]);
console.log(coordinate[1]);

person[0] = 'Janne wilson';
person[2] = false;

coordinate[0] = 15.2;
coordinate[1] = 25.7;

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}

// const result: never = throwError('something went wrong');
// console.log(result);

let data: any = 52;
data = 'anything';
data = true;

// const finale = data.toUpperCase();
// console.log(finale);

function greet(name: any): void {
    console.log(`Hello, ${name}`);
}

greet(42);
greet('John');
