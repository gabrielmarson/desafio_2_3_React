import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Navbar.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import { CartProvider } from './context/CartContext';


const App = () => {
    return (
        
    <BrowserRouter>
        <CartProvider>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
                <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>             
            </Routes> 
        </CartProvider>   
    </BrowserRouter>
            
    );
}

export default App;
