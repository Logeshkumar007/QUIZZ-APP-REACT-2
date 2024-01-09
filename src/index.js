import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Navbar from '../src/Components/NAVBAR/navbar';
import Navbar from './Componentys/NAVBAR/navbar'
import Homepage from './Componentys/HOMEPAGE/homepage';
import Quiz from './Componentys/QUIZZ/quiz';
import SignIn from './Componentys/Sign/Sign_In';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>} />
       <Route path="/quiz" element={<Quiz />} />
       <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
