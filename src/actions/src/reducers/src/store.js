// src/store.js
import { createStore } from 'redux';
import contatosReducer from './reducers/contatosReducer';

const store = createStore(contatosReducer);

export default store;
