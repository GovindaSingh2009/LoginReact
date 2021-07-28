import logo from './logo.svg';
import Mypic from './Mypic.jpg';
import './App.css';
import Welcome from './Components/Welcome';
import Welcome1 from './Components/Welcome1';
import Hello from './Components/Hello';
import Name from './Components/Name';
import Test from './Components/Test';
import Message from './Components/Message1';
import Counter from './Components/Counter';
import HookCounter from './Components/CounterHook';
import HookName from './Components/HookName';
import HookAddItem from './Components/AddItemHook';
import TitleCount from './Components/TitleHookEffect';
import DateShow from './Components/ClassDate';
import DateShow1 from './Components/DateShowHook';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
      <DateShow />
      <DateShow1 />
        <img src={Mypic} className="App-logo" alt="logo" />
       <HookName />
        <TitleCount />
        <p>
          Govinda....welcome to the react world!
          </p>
         
           <Welcome />
          <Welcome1 name="Govinda" />
          < Test subject = "automation" />
          <Hello /> 
          <Name  name1 = "Amru" city = "Bangalore"/>
          <Name name1 = "Gsr" city = "Hyderabad" >
            <p>Hi ,This is children props.</p>
            <button>Try now</button>
            </Name>
            <Message />
            <Counter />
            <HookCounter /> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Amru
        </a>
        <HookAddItem /> 
      </header>
    </div>
  );
}

export default App;
