import react from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarsForRent from './pages/CarsForRent';
import Cart from './pages/Cart';
import Accessories from './pages/Accessories';
import PayPage from './pages/PaySimulation';

function App()
{
 
    return(
        <BrowserRouter> 
        <Routes>
          <Route path='/' element={<CarsForRent/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/pay' element={<PayPage/>}/>
        </Routes>
       </BrowserRouter>
    )
}


export default App;