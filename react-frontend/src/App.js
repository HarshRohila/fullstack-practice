import React from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  fetch('http://localhost:4200')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  return (
    <div className="App">
      <SignUpForm></SignUpForm>
    </div>
  );
}

export default App;
