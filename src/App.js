import React from 'react';
import{BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {Container ,Col,Row} from 'react-bootstrap';
import Form_1 from './Form_1'
import Form_2 from './Form_2'
import Form_3 from './Form_3'
import Form_4 from './Form_4'
import Form_5 from './Form_5'
import Form_3_1 from './Form_3_1';
import Form_6 from './Form_6';
import Form_7 from './Form_7';
import Form_8 from './Form_8';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Form_1/>}/>
    <Route path='/form_2' element={<Form_2/>}/>
    <Route path='/form_3' element={<Form_3/>}/>
    <Route path='/form_4' element={<Form_4/>}/>
    <Route path='/form_5' element={<Form_5/>}/>
    <Route path='/form_6' element={<Form_6/>}/>
    <Route path='/form_3_1' element={<Form_3_1/>}/>
    <Route path='/form_7' element={<Form_7/>}/>
    <Route path='/form_8' element={<Form_8/>}/>
   </Routes>
   </BrowserRouter>
    

    
   </>
  );
}

export default App;
