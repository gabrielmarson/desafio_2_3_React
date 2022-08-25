import logo from '../img/logo1.svg';
import './Navbar.css';
import './CartWidget.css';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <div className="App">
        <nav>
      <ul>
        <li><a href=""><img src={logo} alt=""/></a></li>
        <li><a href="">Nosotros</a></li>
        <li><a href="">Smartphones</a></li>
        <li><a href="">Contacto</a></li>
        <CartWidget cantidad={3}/>
      </ul>
     </nav>
    </div>
  );
}

export default Navbar;
