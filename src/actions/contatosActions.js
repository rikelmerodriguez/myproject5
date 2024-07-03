// src/actions/contatosActions.js
export const adicionarContato = (contato) => ({
    type: 'ADICIONAR_CONTATO',
    payload: contato,
  });
  
  export const removerContato = (id) => ({
    type: 'REMOVER_CONTATO',
    payload: id,
  });
  
  export const editarContato = (contato) => ({
    type: 'EDITAR_CONTATO',
    payload: contato,
  });
  