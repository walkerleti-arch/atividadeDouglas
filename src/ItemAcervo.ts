export abstract class ItemAcervo {
    private static _contadorId: number = 0;

    public readonly id: number;

    public atualizarTitulo(novoTitulo: string): boolean {
    if (novoTitulo.trim() === "") {
        return false;
    }

    this.titulo = novoTitulo;
    return true;
}

    private emprestado: boolean = false;
    private reservado: boolean = false;

    constructor(
        private titulo: string,
        private autor: string
    ) {
        ItemAcervo._contadorId++;
        this.id = ItemAcervo._contadorId;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public get statusDisponibilidade(): string {
        if (this.emprestado) {
            return "Emprestado";
        }

        if (this.reservado) {
            return "Reservado";
        }

        return "Disponível";
    }

    public emprestar(): boolean {
        if (this.emprestado || this.reservado) {
            return false;
        }

        this.emprestado = true;
        return true;
    }

    public devolver(): boolean {
        if (!this.emprestado) {
            return false;
        }

        this.emprestado = false;
        return true;
    }

    protected definirReservado(valor: boolean): void {
        this.reservado = valor;
    }

    public abstract calcularMulta(
        diasAtraso: number
    ): number;
}