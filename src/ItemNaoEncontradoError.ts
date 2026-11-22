export class ItemNaoEncontradoError extends Error {

    constructor(id: number) {
        super(`Item com ID ${id} não encontrado.`);
        this.name = "ItemNaoEncontradoError";
    }
}