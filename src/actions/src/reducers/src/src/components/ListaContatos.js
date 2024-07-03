// src/components/ListaContatos.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removerContato } from '../actions/contatosActions';

const ContatoItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const ListaContatos = () => {
  const contatos = useSelector(state => state.contatos);
  const dispatch = useDispatch();

  const handleRemoverContato = (id) => {
    dispatch(removerContato(id));
  };

  return (
    <div>
      {contatos.map(contato => (
        <ContatoItem key={contato.id}>
          <p><strong>Nome:</strong> {contato.nome}</p>
          <p><strong>E-mail:</strong> {contato.email}</p>
          <p><strong>Telefone:</strong> {contato.telefone}</p>
          <button onClick={() => handleRemoverContato(contato.id)}>Remover</button>
        </ContatoItem>
      ))}
    </div>
  );
};

export default ListaContatos;
