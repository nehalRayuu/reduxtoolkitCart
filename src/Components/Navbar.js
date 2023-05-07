import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import '../App.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useSelector } from 'react-redux';


function Navbar() {

  const selector = useSelector((item)=>item.cart)
  return (
    <div className='navbar' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
             
               
               
            }}>
       <h3 style={{padding:'10px'}}>
        Shop
       </h3>
        <div className='navItems' ><Link className="navLink" to="/">
       <HomeOutlinedIcon color="primary"  />
       </Link>
       <div className='navItem' ><Link className="navLink" to="/cart">
        <ShoppingCartCheckoutIcon color="primary" />
       </Link>
       <span className="cartCount">:{selector.length} </span>
       </div>
       
       
       </div>
       </div>
   
    
  )
}

export default Navbar