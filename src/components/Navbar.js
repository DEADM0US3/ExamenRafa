import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      {/* crea una navbar con tailwind */}
      <nav className='p-2 flex justify-around'>
        <h1 className="text-3xl text-black font-s">GREEN MEX</h1>
        <Link to="/" className='font-bold'>Home</Link>
        <Link to="/app" className='font-bold'>App</Link>
      </nav>
    </div>
  );
}

export default Navbar;
