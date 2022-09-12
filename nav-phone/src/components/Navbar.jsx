import logo from '../img/logo1.svg';
import './Navbar.css';
import './CartWidget.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="App">
    <nav>
      <ul className="Nav">
        <Link className='Underline' to="/"><li><img src={logo} alt=""/></li></Link>
        <Link className='Underline' to="/categoria/Samsung"><li>Samsung</li></Link>
        <Link className='Underline' to="/categoria/Motorola"><li>Motorola</li></Link>
        <Link className='Underline' to="/categoria/Xiaomi"><li>Xiaomi</li></Link>
        <Link className='Underline' to="/cart"><CartWidget/></Link>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
