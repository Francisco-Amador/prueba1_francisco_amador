import Link from 'next/link'
import React from 'react'

function CallOnAction() {
  return (
    <div className='mt-5'>
        <h4 className=""> Programador Junior en el desarrollo de aplicaciones con tecnologías como API Rest, Java, C++, POO, JSON, JavaFX, JPA, HTML, CSS, JavaScript, TypeScript, TailWind, React, Vite y NextJS. </h4>
        <h2>Contacto</h2>
        <div className=" m-5 ">
            <Link href="mailto:jose.amador.salazar@est.una.ac-cr" className=" m-6 text-black">Email: <span className='text-secondary'> jose.amador.salazar@est.una.ac-cr </span></Link>
            <p className=" m-6 text-black">Telefono: <span className='text-secondary'>+506 2233-2233 </span></p>
            <p className=" m-6 text-black">Whatsapp: <span className='text-secondary'>+506 7216-4877 </span></p>
            <p className=" m-6 text-black">Facebook: <span className='text-secondary'>Francisco Amador </span></p>
        </div>
    </div>
  )
}

export default CallOnAction
