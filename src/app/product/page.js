"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { add } from '@/store/cartSlice';
import { useSelector } from 'react-redux';

function Product({ product }) {

  const dispatch = useDispatch();

  const selector = useSelector(state=>state);
  console.log(selector);


  const handleCart = ()=>{
    dispatch(add({...product,quantity:1}));
  }

  // const addToCartHandler = (product)=>{
  //   dispatch(add(product));
  // }
 
  return (
    <div className="m-4 rounded-md block shadow pb-12">
      <Link href={`/productScreen/${product.slug}`}>
        <img className="rounded-md" src={product.image} alt={product.name} />
      </Link>
      <div className="flex flex-col p-2 justify-center items-center">
        <h2 className="font-bold">{product.name}</h2>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <button
          type="button"
         onClick={()=>{handleCart(product)}}
          className="primary-button px-4 outline-none  py-2 rounded  bg-amber-300 hover:bg-amber-400"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
