
let persona1 = {
    nombre: "Paola",
    edad: 22,
    estatura: 1.56,

}

let persona2 = {
    nombre: "Jose",
    edad: 32,
    estatura: 1.60,

}

let persona3 = {
    nombre: "Adelaida",
    edad: 58,
    estatura: 1.65,

}

let personas = [ persona1 ,persona2, persona3 ]

for (let i= 0; i < personas.length; i++) {
    let persona = personas [i ];
    
    console.log(persona.nombre + " " +  persona.estatura);
}




