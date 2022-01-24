import React,{useState} from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import {Route ,  Routes, BrowserRouter as Router} from 'react-router-dom'
import ToDoList from './components/ToDO/ToDoList';
import Expense from './components/expenseTracker/Expense';

function App() {
  return (
    <div className='app_container'>
      <Router>
      <Navbar/>
      <Routes>
     
        <Route exact path="/" element={<ToDoList/>}/>
        <Route exact path="/expenses" element={<Expense/>}/>
        
        </Routes>
        </Router>
      
 
   </div>
  );
}

export default App;
