import ReactDOM from 'react-dom/client'
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './index.css';
import Header from './componentes/Header';
import Fundo from './componentes/Fundo';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Fundo/>
    </BrowserRouter>
  </React.StrictMode>,
)
