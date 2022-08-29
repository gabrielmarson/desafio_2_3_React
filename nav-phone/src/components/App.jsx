import React from 'react';
import './Navbar.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import CelusCards from './CelusCards';

const App = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer/>
            {CelusCards}
        </div>
    );
}

export default App;
