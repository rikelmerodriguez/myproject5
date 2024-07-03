// src/components/FormularioContato.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarContato, editarContato } from '../actions/contatosActions';

const FormularioContato = ({ contato }) => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState(contato ? contato.nome : '');
  const [email, setEmail] = useState(contato ? contato.email : '');
  const [telefone, setTelefone] = useState(contato ? contato.telefone : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoContato = {
      id: contato ? contato.id : new Date().getTime(),
      nome,
      email,
      telefone,
    };

    if (contato) {
      dispatch(editarContato(novoContato));
    } else {
      dispatch(adicionarContato(novoContato));
    }

    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
      <button type="submit">{contato ? 'Editar' : 'Adicionar'} Contato</button>
    </form>
  );
};

export default FormularioContato;
