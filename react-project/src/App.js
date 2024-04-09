import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const name = "Alessandro"
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <header className="App-header">
        <h2>Alterando o JSX</h2>
        <Frase />
        <Frase />
        <h1>Testando o CSS</h1>
        <p>Olá, {newName}</p>
        <p>Soma: {sum(1,2)}</p>
        <img src={url} alt = "My img"/>
        <HelloWorld></HelloWorld>
        <SayMyName name="Alessandro" />
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
      </header>
      <List />
    </div>
  );
}

export default App;
