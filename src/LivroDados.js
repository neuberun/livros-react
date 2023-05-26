import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditoras } from './controle/ControleEditoras';
import { LivrosContext } from './LivrosContext';

const LivroDados = () => {
    const { livros, setLivros } = useContext(LivrosContext);
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditoras();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (event) => {
        const { value } = event.target;
        setCodEditora(Number(value));
    }

    const incluir = (event) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };

        controleLivro.incluir(livro);
        // setLivros(controleLivro.obterLivros()); // Update the livros state with the updated list
        setLivros([...livros, livro]);
        navigate('/');
    }

    return (
        <main>
            <h1>Dados do Livro</h1>

            <form onSubmit={incluir}>
                <div>
                    <label className='form-label' htmlFor="titulo">Título:</label>
                    <input required={true} className='form-control' type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>

                <div>
                    <label className='form-label' htmlFor="resumo">Resumo:</label>
                    <textarea required={true} className='form-control' id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)}></textarea>
                </div>

                <div>
                    <label className='form-label' htmlFor="autores">Autores:</label>
                    <textarea required={true} className='form-control' id="autores" value={autores} onChange={(e) => setAutores(e.target.value)}></textarea>
                </div>

                <div>
                    <label className='form-label' htmlFor="editora">Editora:</label>
                    <select required={true} className='form-control' id="editora" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>

                <button className='btn btn-primary' style={{ marginTop: '0.5rem' }} type="submit">Salvar Dados</button>
            </form>
        </main>
    );
};

export default LivroDados;
