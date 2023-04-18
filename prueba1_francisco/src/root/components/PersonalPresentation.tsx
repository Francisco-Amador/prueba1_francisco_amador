import Image from 'next/image'
import React from 'react'

function PersonalPresentation() {
  return (
    <div style={{display: "flex"}}>
      <div className='m-5' style={{flex: "0 0 200px"}}>
        <Image className="card-img-top rounded-circle" src={require("../Resource/unnamed.jpg")} alt="" width={200} height={200} />
      </div>
      <div className='p-5' style={{flex: "1"}}>
        <div className="card-body">
          <h5 className="card-title">Francisco Amador</h5>
          <p className="card-text">Estudiante de la Universidad Nacional  </p>
          <p className="card-text">Estudiante de Ingenieria en Sistemas</p>
          <p className="card-text"> 23 años</p>
          <a href="https://www.linkedin.com/in/francisco-amador-968837270/" className="btn btn-primary">Go linkedin</a>
        </div>
      </div>
    </div>
  )
}

export default PersonalPresentation
