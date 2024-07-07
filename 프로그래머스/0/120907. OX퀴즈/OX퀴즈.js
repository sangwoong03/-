const operations = {
    '+': (a, b) => parseInt(a) + parseInt(b),
    '-': (a, b) => parseInt(a) - parseInt(b)
}

function solution(quiz) {
    const questions = quiz.map(elem => elem.split(' '));

    const result = [];
    for (const question of questions) {
        const operation = operations[question[1]];
        if (operation(question[0], question[2]) === parseInt(question[4])) {
            result.push('O');
        } else {
            result.push('X');
        }
    }
    return result;
}