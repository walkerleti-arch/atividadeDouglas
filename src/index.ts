import { Livro } from "./Livro";
import { JogoEletronico } from "./JogoEletronico";
import { RepositorioMemoria } from "./RepositorioMemoria";
import { ItemNaoEncontradoError } from "./ItemNaoEncontradoError";

// Criando repositório
const acervo = new RepositorioMemoria<Livro | JogoEletronico>();


const livro1 = new Livro(
    "Dom Casmurro",
    "Machado de Assis",
    256
);

const livro2 = new Livro(
    "O Hobbit",
    "J. R. R. Tolkien",
    310
);

// Criando jogo
const jogo1 = new JogoEletronico(
    "Minecraft",
    "Mojang",
    "PC"
);

// Adicionando itens ao acervo
acervo.adicionar(livro1);
acervo.adicionar(livro2);
acervo.adicionar(jogo1);

// Listando itens
console.log("=== ACERVO ===");

for (const item of acervo.listar()) {
    console.log(
        `ID: ${item.id} | ` +
        `Título: ${item.getTitulo()} | ` +
        `Autor: ${item.getAutor()} | ` +
        `Status: ${item.statusDisponibilidade}`
    );
}

// Empréstimo
console.log("\n=== EMPRÉSTIMO ===");

console.log("Emprestar livro:", livro1.emprestar());
console.log("Status:", livro1.statusDisponibilidade);

// Devolução
console.log("\n=== DEVOLUÇÃO ===");

console.log("Devolver livro:", livro1.devolver());
console.log("Status:", livro1.statusDisponibilidade);

// Reserva
console.log("\n=== RESERVA ===");

console.log("Reservar livro:", livro2.reservar());
console.log("Status:", livro2.statusDisponibilidade);

console.log("Cancelar reserva:", livro2.cancelarReserva());
console.log("Status:", livro2.statusDisponibilidade);

// Cálculo de multas
console.log("\n=== MULTAS ===");

console.log(
    "Multa do livro por 3 dias:",
    livro1.calcularMulta(3)
);

console.log(
    "Multa do jogo por 3 dias:",
    jogo1.calcularMulta(3)
);

// Busca
console.log("\n=== BUSCA ===");

const encontrado = acervo.buscarPorId(livro1.id);

console.log(
    "Item encontrado:",
    encontrado?.getTitulo()
);

// Exceção
console.log("\n=== TRATAMENTO DE ERRO ===");

try {
    const item = acervo.buscarObrigatorio(999);
    console.log(item.getTitulo());
} catch (erro) {
    if (erro instanceof ItemNaoEncontradoError) {
        console.log("Erro:", erro.message);
    } else {
        console.log("Erro inesperado.");
    }
}

// Remoção
console.log("\n=== REMOÇÃO ===");

console.log("Remover jogo:", acervo.remover(jogo1.id));

console.log("Itens restantes:", acervo.listar().length);