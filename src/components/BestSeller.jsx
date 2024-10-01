import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller,setBestSeller] = useState([]);
  // find best seller data from products and add them into bestSeller array
  useEffect(()=>{
    const bestProduct= products.filter((item)=>(item.bestseller))
    setBestSeller(bestProduct.slice(0,5)) //only 5 items
  },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, culpa.</p>
      </div>

      {/* Displaying Best Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {
          bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item.i_d} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default BestSeller
