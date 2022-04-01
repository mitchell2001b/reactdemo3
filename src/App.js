//import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';
import Products from './pages/Products';
import AccountComponent from './components/AccountComponent';
import Form from './components/Form';
import AccountDetails from './pages/AccountDetails';
import AccountDetComponent from './components/AccountDetComponent';
import AccountUpdateFormComponent from './components/AccountUpdateFormComponent';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />        
        <Route path='/products' element={<Products/>} /> 
        <Route path='/accounts' element={<AccountComponent/>} /> 
        <Route path='/form' element={<Form/>} />
        <Route path='/accounts/:id' element={<AccountDetComponent/>} />
        <Route path='/accounts/update/:id' element={<AccountUpdateFormComponent/>} />  
      </Routes>
    </Router>
  );
}

export default App;
