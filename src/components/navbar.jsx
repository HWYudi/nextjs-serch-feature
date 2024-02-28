import React from 'react';
import Search from './search';

export default function Navbar() {
  return (
    <div className='sticky top-0 w-full bg-amber-300 shadow-md'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-xl font-bold text-gray-800'>Your App Name</h1>
          <Search />
        </div>
      </div>
    </div>
  );
}
