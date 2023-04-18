import React from 'react'
import {Repository} from "@/pages/index"
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'
 interface proms{
    repository : Repository
 }
function Repository( {repository} : proms) {
  return (
       
          <div className="card p-3 mb-3">
            <p className="bg-light text-Black text-center rounded-pill mb-3">Nombre de repositorio: <span >{repository.name}</span></p>
            <Link href={repository.html_url} target="_blank" className="btn btn-primary ">Ir al repositorio</Link>
          </div>
      
  )
}

export default Repository
