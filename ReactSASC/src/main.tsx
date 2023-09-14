import ReactDOM from 'react-dom/client'
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './index.css';
import Menu from './componentes/Menu'
import Header from './componentes/Header';
import Home from './pages/Home';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Menu/>

    </BrowserRouter>
  </React.StrictMode>,
)
