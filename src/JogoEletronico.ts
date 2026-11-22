import { ItemAcervo } from "./ItemAcervo";

export class JogoEletronico extends ItemAcervo {

    constructor(
        titulo: string,
        autor: string,
        private plataforma: string
    ) {
        super(titulo, autor);
    }

    public getPlataforma(): string {
        return this.plataforma;
    }

    public override calcularMulta(diasAtraso: number): number {
        if (diasAtraso <= 0) {
            return 0;
        }

        return diasAtraso * 5;
    }
}