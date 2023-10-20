import React from 'react';
import bgplant from "../assets/bg-plant.png";
import plant from "../assets/plant.png";
function Header() {
    return (
        <div className='grid place-content-center mt-5    mx-20 rounded-3xl bg-[#C1DCDC]'>
            <div className='  p-2'>
                <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='text-6xl font-bold mt-[10%]'>
                            Busca la mejor planta para ti
                        </h1>
                        <p className='text-3xl'>+100</p>
                        <p className='text-3xl'>plantas para que puedas ver</p>
                    </div>
                    <div >
                        <img className=' absolute z-20   ' src={plant} alt='plant' />
                        <img className=' z-10 ' src={bgplant} alt='bgplant' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
