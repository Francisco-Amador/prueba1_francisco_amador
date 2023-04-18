import React from 'react'

function Footer() {
    return (

    <footer className="bg-secondary text-white mt-5">
    <div className="container p-4">
        <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Francisco Amador</h5>

            <p>
                Esta pagína es un examen y forma parte de la evaluación del curso de programación,  la página en la que estás puede ser una parte importante del proceso de evaluación de un curso de programación, que a su vez es una disciplina esencial en la actualidad.
            </p>
            </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Información</h5>

            <ul className="list-unstyled mb-0">
            <li>
                <p  className="text-white">Email: <span className='text-primary'>jose.amador.salazar@est.una.ac-cr </span></p>
            </li>
            <li>
            <p  className="text-white">Instagram: <span className='text-primary'>@amador_jf </span></p>
            </li>
            <li>
            <p  className="text-white">Whatsapp: <span className='text-primary'>7216-4877 </span></p>
            </li>
            <li>
            <p  className="text-white">Twitter: <span className='text-primary'> fran123 </span></p>
            </li>
            </ul>
        </div>
        </div>
    </div>
    <div className="text-center p-3 bg-dark" >
        © 2023 @Francisco Amador
        <p className="text-white"></p>
    </div>

    </footer>


  )
}

export default Footer
