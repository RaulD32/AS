import { useState } from 'react';
import './App.css';
import FormAlumnos from './components/formulario';
import Counter from './components/countred'; 
import TodoList from './components/ToDo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
        {/* <FormAlumnos />
        <Counter />  */}
        <TodoList /> 
      </header>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
