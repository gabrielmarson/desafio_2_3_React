import React from 'react';
import './Navbar.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

const App = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer/>
        </div>
    );
}

export default App;
