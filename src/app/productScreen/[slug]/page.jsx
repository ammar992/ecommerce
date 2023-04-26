'use client';

import { useRouter } from 'next/router';
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import { useDispatch } from 'react-redux';
import { add } from '@/store/cartSlice';
import data from '@/utills/data';
import Link from 'next/link';
import {  useState } from "react";


function ProductScreen({ params }) {




  const { slug } = params;
  const product = data.products.find((x) => x.slug == slug);
  console.log(product);




  return (
    <>
    <Header />
    <div className="p-4">
      <div className="font-bold">
        <Link href={'/'}>Back to products</Link>
      </div>
      <div className="grid gap-5 md:grid-cols-4 md:gap-4">
        <div className="md:col-span-2">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
            <div className='text-lg font-bold'>{product.name}</div>
            <div className='font-bold'>Category: {product.category}</div>
            <div className='font-bold'>Brand {product.brand}</div>
            <div className='font-bold'>{product.rating} of {product.numReviews}</div>
            <div className='font-bold'>Description: {product.description}</div>
        </div>
        <div className='p-5 shadow block rounded-md h-40 border-gray-200'>
            <div className='flex justify-between mb-2'>
                <div>price</div>
                <div>{product.price}</div>
            </div>
            <div className='flex justify-between mb-2'>
                <div>Status</div>
                <div>{product.countInStock>0?"In Stock":"Unavailable"}</div>
            </div>
            <button  className='px-4 py-2  bg-amber-300 w-full rounded shadow hover:bg-amber-400'>Add to cart</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}





export default ProductScreen;