import React from 'react';
import Intro from './Intro/Intro';
import ContractForm from './ContactForm/ContactForm';

class App extends React.Component {
  render() {
    return (
      <span>
        <Intro />
        <ContractForm />
      </span>
    );
  }
}

export default App;