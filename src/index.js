import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Employees from './Employees';
import Message from './Message';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UpdateEmployee from './UpdateEmployee';
import Upload from './Uploadfile'
import NavBar from './Nav'
import {BrowserRouter ,Routes,Route}  from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>} ></Route>
<Route path='/employees' element={<Employees />} ></Route>
<Route path='/message' element={<Message />} ></Route>
<Route path="/updateemployee" element={<UpdateEmployee />}/>
<Route path='/upload'  element={<Upload />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();