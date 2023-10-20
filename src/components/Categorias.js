import React from 'react'
import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.png"
import cat3 from "../assets/cat3.png"


function Categorias() {
    return (
        <>
            <h2 className=' font-semibold text-center mt-10 text-3xl '> Que ofrecemos </h2>
            <p className='text-center font-sans mt-1 antialiased'>Ofrecemos informacion detallada sobre mas de 100 plantas
            almacenadas en nuestra base de datos para que puedas escoger tu planta ideal.</p>
            <div className=' h-screen bg-[#C1DCDC] mt-5'>
                <div className=' pt-10'>
                    <div className=' grid grid-cols-3 mx-10'>
                        <div  className='flex-col '>
                            <img className='' src={cat1} alt='cat' />
                            <p className='text-xl justify-center text-center font-sans font-semibold'>Plantas que requieran sol</p>
                        </div>
                        <div className='flex-col'>
                            <img src={cat2} alt='cat' />
                            <p className='text-xl justify-center text-center font-sans font-semibold'>Plantas nocturnas</p>
                        </div>
                        <div className='flex-col'>
                            <img src={cat3} alt='cat' />
                            <p className='text-xl justify-center text-center font-sans font-semibold'>Plantas para interiores</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Categorias