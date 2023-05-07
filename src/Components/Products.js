import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/cartSlice';

function Products() {

  const [products,setProducts] = useState([]);
  const dispatch = useDispatch();


const fetchProducts =async ()=>{
            const res = await  fetch('https://fakestoreapi.com/products')
            const data =await res.json()
            setProducts(data)
            

}

useEffect(()=>{
         fetchProducts();
         console.log('called')
},[])

const handelclick = (e)=>{
  dispatch(add(e))
}






  return (
    <div className='productsWrapper'>
         <h1>products</h1>
                 {products.map((item)=>(
                      
                <div className='card' key={item.id}>
                  
                  <img src={item.image} alt=''/>
                  <h4>{item.title}</h4>
                  <h5>{item.price}</h5>
                  <button className='btn' onClick={ ()=>{handelclick(item)}}>add to cart</button>
                   </div>

                 

                 ))}

                 

    </div>
  )
}

export default Products