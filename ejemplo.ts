function hola(){
    console.log("Hola");
}

hola();

//---

function sum(x: number,y: number): number{
    return x + y;
}

console.log(sum(2,1));


//---

function saludar(saludo: string , nombre: string): string{
    return saludo + ' ' + nombre;
}

console.log(saludar('Hola','Juan'));

//---

let decir = () => ("Hola, como esta?");

console.log(decir());

//---

function add(a: string ,b: string): string{
    return a + ' ' + b;
}

console.log(add("si","no"));

//---

function any(a: any , b:any): any{
    return a + b; 
}

console.log(any(1,2))
console.log(any('marco',false))
console.log(any(false, 3))

//---

function greet(saludo: string, ...nombres: string[]){
    return saludo + ' ' + nombres.join(", ") + "!";
}

console.log(greet("Buenos dias", "Juan" , "Maria" , "laura"))