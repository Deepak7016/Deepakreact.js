import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Navbar = () => {
  return (   
    <div className='navbar'>
        <Link to={'/ProductList'} style={{textDecoration:"none",color:"black"}}>ProductList</Link>
        <Link to={'/ProductDetails'} style={{textDecoration:"none",color:"black"}}>ProductDetails</Link>
        <Link to={'/Addproduct'} style={{textDecoration:"none",color:"black"}}>Addproduct</Link>
        <Link to={`/Editproduct`} style={{textDecoration:"none",color:"black"}}>Editproduct</Link>
        <Link to={`/Deleteproduct`} style={{textDecoration:"none",color:"black"}}>Deleteproduct</Link>
    </div>
  )
}

export default Navbar