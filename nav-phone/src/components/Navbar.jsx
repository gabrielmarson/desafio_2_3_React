import logo from '../img/logo1.svg';
import './Navbar.css';
import './IconCarrito.css';
import IconCarrito from './IconCarrito';

function Navbar() {
  return (
    <div className="App">
        <nav>
      <ul>
        <li><a href=""><img src={logo} alt=""/></a></li>
        <li><a href="">Nosotros</a></li>
        <li><a href="">Smartphones</a></li>
        <li><a href="">Contacto</a></li>
        <IconCarrito cantidad={3}/>
      </ul>
     </nav>
    </div>
  );
}

export default Navbar;
