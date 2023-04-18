import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../root/components/Header'
import { useState, useEffect } from 'react';
import { getRepositories } from '@/root/repositories/getRepo';

const inter = Inter({ subsets: ['latin'] })

export interface Repository {
  id:       number;
  name:     string;
  html_url: string;
}


export default function Home() {

  const [repositories, setRepositories ] = useState<Repository[]>([])
  useEffect(() => {

    getRepositories().then(
      (response) => {
        if (!response) {
         throw new Error("Error al obtener la lista de repositorios.");
       }else{
        
        setRepositories(response.json as unknown as Repository[])
       }
    }

    )
  },[])
  console.table(repositories)
  return (
    <main className="container-fluid bg-primary">
      <section id="header" className="row"> <Header/></section>


      <section id="" className="row"></section>
      <section id="" className="row"></section>
      <section id="" className="row"></section>
      <section id="" className="row"></section>
    
    </main>
  )
}
