import logo from './logo.svg';
import './App.css';
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import Function from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import BindingEvent from './components/BindingEvent'
import ParentComponent from './components/ParentComponent';
import Conditional from './components/Conditional';
import List from './components/List';
import StyleSheets from './components/StyleSheets'
import Inline from './components/Inline';
import './appstyle.css'
import Form from './components/Form';
import MountingPhase from './components/MountingPhase';
import Frag from './components/Frag';
import Login from './components/Login';
import PureComponent from './components/PureComponent';
import Refs from './components/Refs';

// import style from './appstyle.module.css'

function App() {
  return (
    <div className="App">
      <Refs></Refs>
      {/* <PureComponent></PureComponent> */}
      {/* <Login></Login> */}
      {/* <MountingPhase></MountingPhase> */}
      {/* <Frag></Frag> */}
{/* <Form></Form> */}
      {/* <h1 className='error'>Hello</h1>
      <Inline></Inline> */}
      {/* <StyleSheets></StyleSheets> */}
     {/* <Greet name= "khushi" other = "other"><p>hello</p><p>hello1</p>  </Greet>
     <Welcome name = "khushi kala " other = "otherssss"></Welcome>
     <Hello></Hello>
     <Message></Message>
     <Counter></Counter>
     <Function></Function>
     <ClassClick></ClassClick>
     <BindingEvent></BindingEvent>
     <ParentComponent></ParentComponent>
     <Conditional></Conditional>
     <List></List> */}
     {/* <BindingEvent></BindingEvent> */}
    </div>

  );
}

export default App;


//react.memo