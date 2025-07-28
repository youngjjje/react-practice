import React from 'react';
import ReactDOM from 'react-dom/client';
import AppThinking from './thinking/AppThinking';
import UI from './UI/AppUI'
import AppInteractivity from './AddInteractivity/AppInteractivity'


import Image from './AddInteractivity/Image.js'
import {createRoot} from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <AppInteractivity />
    <Image />
  </React.StrictMode>
);