// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ListaContatos from './components/ListaContatos';
import FormularioContato from './components/FormularioContato';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Lista de Contatos</h1>
        <FormularioContato />
        <ListaContatos />
      </div>
    </Provider>
  );
};

export default App;
