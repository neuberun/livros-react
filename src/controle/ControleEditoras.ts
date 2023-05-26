import { Editora } from '../modelo/Editora';

export class ControleEditoras {
    editoras: Array<Editora> = [
        new Editora(
            1,
            'Editora dos Bacanas'
        ),
        new Editora(
            2,
            'Editora Lost Cavity'
        ),
        new Editora(
            3,
            'Editora Bandeirante'
        )
    ]

    getNomeEditora(codEditora: number) {
        // usando a função find
        // return this.editoras.find(item => item.codEditora === codEditora)?.nome; 

        // usando filter
        return this.editoras.filter(item => item.codEditora === codEditora)[0].nome;
    }

    getEditoras() {
        return this.editoras;
    }
}