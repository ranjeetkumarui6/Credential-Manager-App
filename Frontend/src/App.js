
import Admin from './Pages/Admin/Index';
import Home from './Pages/Home';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Shared/Login/Index';
import Register from './Shared/Register/Index';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/registration' element={<Register/>}/>
    <Route exact path='/user' element={<Admin/>}/>
    
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
