import React from 'react'

function Footer() {
  return (
    <section className="">
    <footer className="bg-secondary text-white">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Francisco Amador</h5>
  
            <p>
              Esta pagína es un examen y forma parte de la evaluación del curso de programación 
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Información</h5>
  
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark" >
        © 2023
        <a className="text-white" href=""></a>
      </div>

    </footer>

  </section>
  )
}

export default Footer
