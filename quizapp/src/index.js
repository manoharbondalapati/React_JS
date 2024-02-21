import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Home from './Navbar/Home';
//import Aboutus from './Navbar/Aboutus';
//import Services from './Navbar/Services';
//import Career from './Navbar/Career';
//import Contactus from './Navbar/Contactus';
//import Login from './Navbar/Login';
//import Navbar from './Navbar/Navbar';
//import Nopage from './Navbar/Nopage';
import TodoList from './todolist/TodoList';
import Edit from './todolist/Edit';
//import Parent from './Navbar/Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
           <BrowserRouter>
           {/* <Navbar/> */}
               <Routes>
                <Route path='/' element={<TodoList/>}/>
                <Route path='/list/:id' element={<Edit/>}/>
                {/* <Route path="/"  element ={<Home/>}/> */}
                {/* <Route path='/aboutus' element={<Aboutus/>}/> */}
                {/* <Route path='/services' element={<Services/>}/> */}
                
                {/* <Route path='/career' element={<Career/>}/> */}
                {/* <Route path='/home' element={<Home/>}/> */}
                {/* <Route path='/contactus' element={<Contactus/>}/> */}
                {/* <Route path='/login' element={<Login/>}/> */}
                {/* <Route path='*' element={<Nopage/>}/> */}
               </Routes>
           </BrowserRouter>
                
        //       <Parent/>
            );




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import HomePage from './quizapp/HomePage';
// import App from './quizapp/App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//            <BrowserRouter>
//                <Routes>
//                <Route path='/' element={<HomePage/>}/>
//                <Route path='/app' element={<App/>}/>
//                <Route path='/homepage' element={<HomePage/>}/>
//                </Routes>
//            </BrowserRouter>
          
//             );
