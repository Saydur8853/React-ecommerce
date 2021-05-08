import React, {useState} from 'react'
import Menu from '../../assets/svg/bars-solid.svg'
import Close from '../../assets/svg/times-solid.svg'
import CartIcon from '../../assets/svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'


export default function Header() {

    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)

    }

    const styleMenu = {
        left: menu? 0 : "-100%"
    }
    return (
        <header>
        <div className="logo">
          <h1><Link to="/products">FLONE</Link></h1>
          </div>
          <ul style={styleMenu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Login / Register</Link></li>
            
            <li onClick= {toggleMenu}>
              <img src={Close} alt="" width="30" className="menu"/>
            </li>

          </ul>

          <div className="menu" onClick= {toggleMenu}>
          <img src={Menu} alt="" width="30"/>
          </div>

          
          <div className="nav-cart">
            <span>0</span>
            <Link to ="/cart">
            <img src={CartIcon} alt="" width="30"/>
            </Link>

          </div>

      </header>
    )
}
