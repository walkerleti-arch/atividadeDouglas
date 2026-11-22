import { ItemAcervo } from "./ItemAcervo";
import { Reservavel } from "./Reservavel";

export class Livro extends ItemAcervo implements Reservavel {

    constructor(
        titulo: string,
        autor: string,
        private paginas: number
    ) {
        super(titulo, autor);
    }

    public getPaginas(): number {
        return this.paginas;
    }

    public reservar(): boolean {
        if (this.statusDisponibilidade !== "Disponível") {
            return false;
        }

        this.definirReservado(true);
        return true;
    }

    public cancelarReserva(): boolean {
        if (this.statusDisponibilidade !== "Reservado") {
            return false;
        }

        this.definirReservado(false);
        return true;
    }

    public override calcularMulta(diasAtraso: number): number {
        if (diasAtraso <= 0) {
            return 0;
        }

        return diasAtraso * 2;
    }
}