import React from 'react';

import Dashboard from  './components/Dashboard/Dashboard';
// import SearchBar from './components/Helpers/SearchBar';
import Chars from './components/Char/Chars';
import Pages from './components/Helpers/Pages';

import './App.css';
function App() { 
  return (

    <div className="App">
      <Dashboard/>
      {/* <SearchBar/> */}
      <Chars />
      <Pages />
    </div>
  );
}

export default App;