import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'
import wishlist from '../assets/svg/heart-regular.svg'
import quickview from '../assets/svg/eye-regular.svg'

export default function Products() {
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart
    return (
        <div className="products">
            {
                products.map(product =>(
                    <div className="card" key= {product._id}>
                    <Link to= {`/products/${product._id}`}>
                      <img src={product.images[0]} alt= "" ></img>
                    </Link>
                    <div className="box">
                      <h3 title="{product.title}">
                        <Link to ={`/product/${product._id}`}>{product.title}</Link>
                      </h3>

                      <h4>${product.price}</h4>
                      <button onClick = {()=> addCart(product._id)}>Buy now</button>

                      <button className="wish"> <img src={wishlist} alt="wishlist"/></button>
                      <button className="view" > <img src={quickview} alt="quickview"/></button>
                    </div>
        
                  </div>
                ))
            }
            
         

        </div>
    )
}
