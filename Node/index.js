const quetion = [
    "O que aprendi hoje?",
    "Oque me deixou aborrecido?",
    "O que poderia fazer para melhorar?",
    "O que me deuxa feliz?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    Process.stdout.write(question[index] + '\n');
}

ask();
