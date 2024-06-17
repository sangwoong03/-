const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(' ');
}).on('close', () => {
    const num = input[0];
    for (let i = 1; i <= num; i++) {
        console.log( '*'.repeat(i) );
    }
});