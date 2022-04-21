//import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';
import Products from './pages/Products';
import AccountComponent from './components/AccountComponent';
import Form from './components/Form';
import AccountDetComponent from './components/AccountDetComponent';
import AccountUpdateFormComponent from './components/AccountUpdateFormComponent';
import TaskComponent from './components/TaskComponent';
import TaskCreateForm from './components/TaskCreateForm';
import TaskDetailsComponent from './components/TaskDetailsComponent';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />        
        <Route path='/products' element={<Products/>} /> 
        <Route path='/accounts' element={<AccountComponent/>} />
        <Route path='/tasks' element={<TaskComponent/>} />  
        <Route path='/form' element={<Form/>} />
        <Route path='/accounts/:id' element={<AccountDetComponent/>} />
        <Route path='/tasks/:id' element={<TaskDetailsComponent/>} />
        <Route path='/accounts/update/:id' element={<AccountUpdateFormComponent/>} />  
        <Route path='/taskform' element={<TaskCreateForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
