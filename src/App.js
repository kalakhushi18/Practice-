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


function App() {
  return (
    <div className="App">
     <Greet name= "khushi" other = "other"><p>hello</p><p>hello1</p>  </Greet>
     <Welcome name = "khushi kala " other = "otherssss"></Welcome>
     <Hello></Hello>
     <Message></Message>
     <Counter></Counter>
     <Function></Function>
     <ClassClick></ClassClick>
     <BindingEvent></BindingEvent>
    </div>

  );
}

export default App;
