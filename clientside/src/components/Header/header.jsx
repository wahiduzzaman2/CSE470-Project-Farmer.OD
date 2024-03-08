import React from 'react';

const Header = () => {
  return (
    <div className='w-full bg-lime-300 px-4 py-3 flex items-center justify-between'>
      {/* Logo */}
      <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-black cursor-pointer duration-100'>
        <p className='font-semibold text-xl antialiased'>Food2Door</p>
      </div>
      
      {/* Search */}
      <div className='flex-grow mx-4'>
        <input
          className="w-full h-full text-base outline-none border-none px-6 py-2"
          type="text"
          placeholder="Search"
        />
      </div>
      
      {/* Navigation Links */}
      <div className='flex items-center gap-4'>
        {/* Products */}
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-black cursor-pointer duration-100'>
          <p className='font-'>All Products</p>
        </div>
        
        {/* Become a Seller */}
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-black cursor-pointer duration-100'>
          <p className='font-'>Become a Seller</p>
        </div>
        
        {/* Login/Signup */}
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-black cursor-pointer duration-100'>
          <p className='font-'>Login|Signup</p>
        </div>
        
        {/* Cart */}
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-black cursor-pointer duration-100'>
          <p className='font-'>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
