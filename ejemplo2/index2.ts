function suma(a: number, b: number) {
    if (a <= 0 || b <= 0) {
        throw new Error("Los números deben ser mayores a 0");
    }
    return a + b;
}

const num1 = 5;
const num2 = 10;

// const resultado: number = suma(num1, num2);

console.log(resultado);


function showDay(day: string) {
    switch (day) {
        case "lunes":
            console.log("Es lunes");
            break;
        case "martes":
            console.log("Es martes");
            break;
        case "miércoles":
            console.log("Es miércoles");
            break;
        case "jueves":
            console.log("Es jueves");
            break;
        case "viernes":
            console.log("Es viernes");
            break;
        case "sábado":
            console.log("Es sábado");
            break;
        case "domingo":
            console.log("Es domingo");
            break;
        default:
            throw new Error("Día no válido");
    }
}

showDay("lunes"); 


type MyUnion = {
    name: string;
    age: number;
} | {
    email: string;
    phone: string;
};

let x: MyUnion = { name: "Lina", age: 20 };
x = { email: "linan@example.com", phone: "325698745" };


for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}

const numeros: Array<number> = [15, 7, 4, 13];
for (const numero of numeros) {
    console.log(numero);
}

let i: number = 1;
while (i <= 4) {
    console.log(i);
    i++;
}



const person: { readonly name: 'Johnny', readonly age: 40 } = {
    name: 'Johnny',
    age: 40,
};

const personLiteral = {
    name: 'Jose',
    age: 63,
} as const;

console.log(personLiteral.name); 
