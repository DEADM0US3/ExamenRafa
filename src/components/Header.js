import React from 'react';
function Header() {
    return (
        <div className='grid place-content-center mt-5   hero mx-20 rounded-3xl '>
            <div className='  p-2'>
                <div className='grid '>
                    <div className='px-10 w-full  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
                        <h1 className='text-6xl font-bold '>
                            Busca la mejor planta 
                        </h1>
                        <p className='text-3xl text-center mt-6'>+100</p>
                        <p className='text-3xl text-center'>plantas para que puedas ver</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Header;
