import React from 'react'
import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.png"
import cat3 from "../assets/cat3.png"


function Categorias() {
    return (
        <>
            <h2 className=' font-semibold text-center mt-10 text-3xl '> Que ofrecemos </h2>
            <div className=' h-screen bg-[#C1DCDC] mt-5'>
                <div className=' pt-10'>
                    <div className=' grid grid-cols-3 mx-10'>
                        <div  className=' '>
                            <img className='' src={cat1} alt='cat' />
                        </div>
                        <div>
                            <img src={cat2} alt='cat' />

                        </div>
                        <div>
                            <img src={cat3} alt='cat' />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Categorias