import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import {App} from './App';
import { ColorRondam } from './Component/ColorRondam/ColorRondam';
// import { Colorchange } from './Component/Colorchange/Colorchange';
// import { Todo }from './Component/Todo/Todo';

import reportWebVitals from './reportWebVitals';
// import {Colortoggle} from './Component/ColorToggle/Colortoggle'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Colorchange/> */}
    {/* <Todo /> */}
    <ColorRondam/>
    {/* <Colortoggle/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
