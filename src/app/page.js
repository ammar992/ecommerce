
"use client"

import Image from 'next/image';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Product from './product/page';
import data from '@/utills/data';


export default function Home() {

  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Header />
      <div className='grid p-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {data.products.map((product)=>{
          return(
            <Product  product={product} key={product.slug} />
          )
        })}
      </div>
      <Footer />
    </div>
  );
}
