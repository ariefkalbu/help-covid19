import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Statistik from './components/dashboard/statistik';
import ListData from './components/card/CardTable'

function App() {

  return (
    <div className="App">
        <Header text="@arief_kalbu"></Header>
      <Statistik></Statistik>
      <ListData></ListData>
    </div>
  );
}

export default App;
