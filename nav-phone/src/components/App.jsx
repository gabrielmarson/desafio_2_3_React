import React from 'react';
import './Navbar.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import CelusCards from './CelusCards';
import ItemDetailContainer from './ItemDetailContainer';


const App = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer/>
            {CelusCards}
            <ItemDetailContainer/>
        </div>
    );
}

export default App;
