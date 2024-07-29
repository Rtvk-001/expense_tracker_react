import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowTransactions from './ShowTransactions.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ShowTransactions />} />
          {/* Add more routes here if you have other components/pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
