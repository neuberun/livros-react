import { useState, useContext, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditoras } from './controle/ControleEditoras';
import { LivrosContext } from './LivrosContext';

const controleLivros = new ControleLivros();
const controleEditoras = new ControleEditoras();

const LivroLista = () => {
    const { livros, setLivros } = useContext(LivrosContext);
    // const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
    const [updateKey, setUpdateKey] = useState(0); // State variable to trigger re-render

    useEffect(() => {
        const obterLivros = async () => {
            const livrosObtidos = controleLivros.obterLivros();
            setLivros(livrosObtidos);
            setCarregado(true);
        };

        obterLivros();
    }, [setLivros, updateKey]);

    const excluirLivro = async (codigoLivro) => {
        controleLivros.excluir(codigoLivro);
        setUpdateKey((prevKey) => prevKey + 1); // Update updateKey to trigger re-render
    };

    const LinhaLivro = (props) => {
        return (
            <tr>
                <td>
                    {props.livro.titulo}
                    <br />
                    <button className='btn btn-danger' style={{ marginTop: '0.5rem' }} onClick={() => excluirLivro(props.livro.codigo)}>Excluir</button>
                </td>
                <td>{props.livro.resumo}</td>
                <td>{controleEditoras.getNomeEditora(props.livro.codEditora)}</td>
                <td>
                    <ul>
                        {props.livro.autores.map((autor, index) => (
                            <li key={index}>{autor}</li>
                        ))}
                    </ul>
                </td>
            </tr>
        );
    };

    return (
        <div className='row'>
            <h1>Catálogo de Livros</h1>
            {carregado ? (
                <table className='table table-striped'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro key={livro.codigo} livro={livro} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Carregando livros...</p>
            )}
        </div>
    );
};

export default LivroLista;