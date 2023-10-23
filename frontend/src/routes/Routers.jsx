
import Home from '../pages/Home';

import Services from '../pages/Services';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

import Contact from '../pages/Contact';
import Professor from '../pages/Professor/Professor';
import ProfessorDetails from '../pages/Professor/ProfessorDetails';

import {Routes,Route} from 'react-router-dom';

const Routers = () => {
  return <Routes>
         <Route path ="/"  element ={<Home/>}/>
         <Route path ="/home"  element ={<Home/>}/>
         <Route path ="/services"  element ={<Services/>}/>
         <Route path ="/register"  element ={<Signup/>}/>
         <Route path ="/login"  element ={<Login/>}/>
         <Route path ="/contact"  element ={<Contact/>}/>
         <Route path ="/professor"  element ={<Professor/>}/>
         <Route path ="/professor/:id"  element ={<ProfessorDetails/>}/>  
         </Routes>
  
};

export default Routers;
