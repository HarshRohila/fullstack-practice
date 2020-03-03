import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  fetch('http://localhost:4200')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SignUpForm></SignUpForm>
    </div>
  );
}

export default App;
