let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let dominios = [];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            let dominio = `${pronoun[i]}${adj[j]}${noun[k]}.com`;
            dominios.push(dominio);
        }
    }
}

console.log(dominios);
