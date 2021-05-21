import React, {useState, useContext} from 'react'
import Menu from '../../assets/svg/bars-solid.svg'
import Close from '../../assets/svg/times-solid.svg'
import Cart from '../../assets/svg/shopping-cart-solid.svg'
import logo from '../../assets/images/logo.png'
import {NavLink, Link} from 'react-router-dom'
import {DataContext} from '../DataProvider' 

export default function Header() {

    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart


    const toggleMenu = () => {
        setMenu(!menu)

    }

    const styleMenu = {
        left: menu? 0 : "-100%"
    }
    return (
        <header>
          <div className="menu" onClick={toggleMenu}>
            <img src={Menu} alt="" width="30"/>
          </div>

        <div className="logo">
          <h1 ><Link to="/home"> <img src= {logo} alt="Flone" /></Link></h1>
          </div>
          <ul style={styleMenu}>
            <li><NavLink exact to="/home" activeClassName="active">Home</NavLink></li>
            <li><NavLink exact to="/products" activeClassName="active">Products</NavLink></li>
            <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
            <li><NavLink exact to="/login" activeClassName="active">Login / Register</NavLink></li>
            
            <li onClick= {toggleMenu}>
              <img src={Close} alt="" width="30" className="menu"/>
            </li>

          </ul>
          <div className="cart-icon">
            <span>{cart.length}</span>
            <Link to ="/cart">
            <img src={Cart} alt="" width="30"/>
            </Link>

          </div>

         

      </header>
    )
}
