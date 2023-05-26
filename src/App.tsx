import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import { LivrosProvider } from './LivrosContext';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
        <div className='container-fluid'>
        <ul className="navbar-nav mr-auto gap-3" style={{flexDirection: 'row'}}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link to="/dados" className="nav-link">Novo</Link>
          </li>
        </ul>
        </div>
      </nav>
      <LivrosProvider>
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </LivrosProvider>
    </BrowserRouter>
  );
};

export default App;
