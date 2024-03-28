import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './screens/Game/Game';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/game" element={<Game/>}/>
    </Routes>
  </BrowserRouter>
);


