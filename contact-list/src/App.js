import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddContact />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
