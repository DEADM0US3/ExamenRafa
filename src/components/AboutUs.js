import React from 'react'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"


function AboutUs() {
    return (
        <div className=' mt-10'>
            <h2 className=' text-center font-semibold  text-xl'> Sobre Nosotros</h2>
            <div className='grid grid-cols-3 mt-4'>

                <div className='flex flex-col items-center'>
                    <div className='bg-[#C1DCDC] w-12 rounded-3xl p-2 flex justify-center '>
                        <img src={icon1} alt='icon' />
                    </div>

                    <div>
                        <p className='text-center'>Misión</p>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-[#C1DCDC] w-12 rounded-3xl p-2 flex justify-center'>
                        <img src={icon2} alt='icon' />
                    </div>
                    <div>
                        <p className='text-center'>Visión</p>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='bg-[#C1DCDC] w-12 rounded-3xl p-2 flex justify-center'>
                        <img src={icon3} alt='icon' />
                    </div>
                    <div>
                        <p className='text-center'>Valores</p>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutUs