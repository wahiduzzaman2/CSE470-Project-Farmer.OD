import React from 'react';
const Header = () => {
  return (
    <div>
      <div className='w-full bg-lime-300 px-4 py-3 flex items-center gap-4'>
        {/*===============logo Image start here ================*/}
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-black cursor-pointer duration-100'>
          <p className='font-semibold text-xl antialiased'>Food2Door</p>
        </div>
        {/*===============logo Image end here ================*/}
        {/*=============== Allproducts ================*/}
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-black cursor-pointer duration-100'>
          <p className='font-'>Products</p>
        </div>
        {/*===============Allproducts end here ================*/}
        {/*===============Search ================*/}
        <div>
        <input
          className="h-full  text-base  flex-grow outline-none border-none px-6 "
          type="text"
        />
        </div>
        {/*===============Search end here ================*/}
      </div>
    </div>
  );
};

export default Header;
