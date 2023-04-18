import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../root/components/Header'
import { useState, useEffect } from 'react';
import { getRepositories } from '@/root/repositories/getRepo';
import RepositoryList from '@/root/components/RepositoryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalPresentation from '@/root/components/PersonalPresentation';
import Footer from '@/root/components/Footer';
import CallOnAction from '@/root/components/CallOnAction';

const inter = Inter({ subsets: ['latin'] })

export interface Repository {
  id:       number;
  name:     string;
  html_url: string;
}
interface RepositoryLists{
  RepositoriesItem :Repository[];
}

export default function Home() {

  const [repositories, setRepositories ] = useState<Repository[]>([])

  useEffect (()=>{
    getRepositories().then(response => {
        if (response)
        setRepositories( response.data)
      })
      .catch(error => {
        console.error(error);
      });
      
},[])


  console.table(repositories)
  return (
    <main className="container-fluid  ">
      <section id="section1" className="row"> <Header/></section>
      <section id="section2" className="row"><PersonalPresentation/></section>
      <section id="section3" className="row"><RepositoryList RepositoriesItem={repositories}/>  </section>
      <section id="section4" className="row"><CallOnAction/></section>
      <section id="section5" className="row"><Footer/></section>
    </main>
  )
}
