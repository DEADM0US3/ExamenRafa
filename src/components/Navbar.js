import React from 'react'

function Navbar() {
  return (
    <div>
        {/* crea una navbar con tailwind */}
        <nav className='  p-2 flex  justify-around'>
            <h1 className="text-3xl text-black font-s">GREEN MEX</h1>
            <a className=' font-bold'>Home</a>
            <a className=' font-bold'> app </a>
        </nav>
    </div>
  )
}

export default Navbar