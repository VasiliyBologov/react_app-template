import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from './components/FunctionClick';
import ClallClick from './components/ClallClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';




function App() {
    return (
        <div className="App">
            <UserGreeting />
            {/* <ParentComponent></ParentComponent> */}
            {/* <EventBind></EventBind> */}
            {/* <FunctionClick></FunctionClick>
            <ClallClick /> */}
            {/* <Counter></Counter> */}
            {/* <Message/> */}
            {/*<Greet name='Bruce' heroName='BM'>*/}
            {/*    <p>This is children props </p>*/}
            {/*</Greet>*/}
            {/*<Greet name='Diana' heroName='WW' >*/}
            {/*    <button>Action</button>*/}
            {/*</Greet>*/}
            {/*<Greet name='Clark' heroName='SM'/>*/}
            {/*<Welcome name='Bruce' heroName='BM'/>*/}
            {/*<Welcome name='Clark' heroName='SM'/>*/}
            {/*<Welcome name='Diana' heroName='WW'/>*/}
            {/*<Hello />*/}
        </div>
    );
}

export default App;
