import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  return (
    <div className="App">
      <HelloWorld />
      <h1>Teste</h1>
      <SayMyName name="Douglas"/>
      <SayMyName name="João"/>
      <SayMyName name="Maria"/>
      <Pessoa nome="Glenda" idade="27" profissao="Futura Dev" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
