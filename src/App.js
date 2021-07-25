import logo from './logo.svg';
import Mypic from './Mypic.jpg';
import './App.css';
import Welcome from './Components/Welcome';
import Welcome1 from './Components/Welcome1';
import Hello from './Components/Hello';
import Name from './Components/Name';
import Test from './Components/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Mypic} className="App-logo" alt="logo" />
        <p>
          Govinda....welcome to the react world!
          </p>
           <Welcome />
          <Welcome1 name="Govinda" />
          < Test subject = "automation" />
          <button> Button </button>
          <Hello /> 
          <Name  name1 = "Amru" city = "Bangalore"/>
          <Name name1 = "Gsr" city = "Hyderabad" >
            <p>Hi ,This is children props.</p>
            <button>Try now</button>
            </Name>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Amru
        </a>
      </header>
    </div>
  );
}

export default App;
