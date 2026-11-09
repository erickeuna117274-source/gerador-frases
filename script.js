
// Lista de frases
const frases = [
    "Nunca desista dos seus sonhos!",
    "O sucesso começa com a dedicação.",
    "Acredite no seu potencial!",
    "Grandes conquistas exigem esforço.",
    "Persista, mesmo diante das dificuldades!",
    "O conhecimento transforma vidas.",
    "Cada dia é uma nova oportunidade.",
    "Tenha foco nos seus objetivos!",
    "A disciplina é o caminho para o sucesso.",
    "Você é capaz de conquistar grandes coisas!"
];

// Função para gerar uma frase
function gerarFrase() {

    // Escolhe um número aleatório
    const sorteio = Math.floor(
        Math.random() * frases.length
    );

    // Mostra a frase na tela
    document.getElementById("textoFrase").innerText =
        frases[sorteio];

}
