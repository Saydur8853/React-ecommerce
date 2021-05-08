import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'
//import image from '../assets/images/CardImage/img (1).jpg'


export default function Products() {
    const [products] = useContext(DataContext)
    console.log(products)
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
                      <p>{product.description}</p>
                      <h4>${product.price}</h4>
                      <button onClick = {()=> this.Context.addCart(product._id)}>Add to cart</button>
                    </div>
        
                  </div>
                ))
            }
            
         

        </div>
    )
}
