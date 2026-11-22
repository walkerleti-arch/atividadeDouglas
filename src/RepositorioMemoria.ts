import { ItemAcervo } from "./ItemAcervo";
import { ItemNaoEncontradoError } from "./ItemNaoEncontradoError";

export class RepositorioMemoria<T extends ItemAcervo> {

    private itens: T[] = [];

    public atualizar(
    id: number,
    dados: Partial<{ titulo: string }>
): boolean {
    const item = this.buscarPorId(id);

    if (!item || !dados.titulo) {
        return false;
    }

    return item.atualizarTitulo(dados.titulo);
}

    public adicionar(item: T): void {
        this.itens.push(item);
    }

    public listar(): readonly T[] {
        return this.itens;
    }

    public buscarPorId(id: number): T | undefined {
        return this.itens.find(item => item.id === id);
    }

    public buscarObrigatorio(id: number): T {
        const item = this.buscarPorId(id);

        if (!item) {
            throw new ItemNaoEncontradoError(id);
        }

        return item;
    }

    public remover(id: number): boolean {
        const indice = this.itens.findIndex(
            item => item.id === id
        );

        if (indice === -1) {
            return false;
        }

        this.itens.splice(indice, 1);
        return true;
    }
}