import React from 'react'
import { Link } from 'react-router-dom'
import CarouselContainer from './CarouselContainer'

export default function Home() {
    return (
        
        <div className="carousel">
            <Link to="/home"><CarouselContainer/></Link>
        </div>
        
    )
}
