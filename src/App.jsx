import React, { useState, useEffect } from 'react';
import { SignUp, Login } from './pages';
import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import ShowTransactions from './ShowTransactions.jsx';
import './App.css';

const App = () => {
  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  return (
      <div className="app">
        
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          <Route path="/showtransactions" element={<ShowTransactions />} />
          {token?<Route path={'/homepage'} element={ <Homepage token={token} />} />:""}
          {/* Add more routes here if you have other components/pages */}
        </Routes>
      </div>

  );
};

export default App;
