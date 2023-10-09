import logo from './logo.svg';
import './App.css'
import './index.css'
import './style.css'
import './bootstrap.min.css'
import Example from './Example';
import MyForm from './MyForm';
import NameDetails from './NameDetails';

import Documents from './Documents';

import EsignatureWorkflow from './EsignatureWorkflow';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    
      <div className="container bg-gradent-primary">
      <header className="App-header">
                    <b>Skill summarizer </b>
                  
                 
      </header>
      <div align="center"> <a href="/login" className="cLink">Login  Account  | <a href="/step" className="cLink">Send letter | </a> </a></div>
      <div align="center"><a href="/" className="cLink"> Resumes </a> </div>
       
        {/* <NameDetails /> */}
      
        <Routes>
          <Route path="/login"  element={<MyForm />}/>
           {/* <Route path="/exam"  element={<Example />}/>  */}
          <Route path="/step" element={<EsignatureWorkflow />}/>
          <Route path="/doc"  element={<Documents />}/>
          <Route path="/"  element={ <NameDetails />}/>
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;

