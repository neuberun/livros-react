import React, { createContext, useState } from 'react';

export const LivrosContext = createContext();

export const LivrosProvider = ({ children }) => {
    const [livros, setLivros] = useState([]);

    return (
        <LivrosContext.Provider value={{ livros, setLivros }}>
            {children}
        </LivrosContext.Provider>
    );
};
