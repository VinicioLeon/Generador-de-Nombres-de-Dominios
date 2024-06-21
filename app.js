let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

// Array para almacenar todas las combinaciones de nombres de dominio
let dominios = [];

// Generar todas las combinaciones posibles
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            let dominio = `${pronoun[i]}${adj[j]}${noun[k]}.com`;
            dominios.push(dominio);
        }
    }
}

// Imprimir todas las combinaciones de nombres de dominio
console.log(dominios);