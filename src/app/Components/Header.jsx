import React from 'react'
import { Store } from '@/utills/Store';
import { useSelector } from 'react-redux';


function Header() {

  const selector = useSelector(state=>state);
  console.log(selector.cart.length)
  
  return (
    <div>
        <nav className='flex justify-between shadow-md h-12 items-center px-4'>
            <div className='text-xl font-bold'>Amazon</div>
            <ul className='flex items-center'>
                <li className='m-2'>Cart
                {selector.cart && <span className='bg-red-600 text-white font-bold ml-1 rounded-full px-1 py-2 text-xs'>{selector.cart.length
                }</span>}
                </li>
                <li className='m-2'>Login</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header