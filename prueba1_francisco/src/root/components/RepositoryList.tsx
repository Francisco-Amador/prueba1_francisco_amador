import React from 'react'
import {Repository} from "@/pages/index"
import Repository1 from './Repository';
import { Carousel } from 'react-bootstrap';


interface RepositoryLists{
    RepositoriesItem :Repository[];
  }

function RepositoryList({ RepositoriesItem}: RepositoryLists) {
    return (
    <Carousel className='bg-light mt-4 '>
        {
            RepositoriesItem.map((item)=> (
                <Carousel.Item key={item.id}>
                    <Repository1
                    repository ={item}
                    />
                </Carousel.Item>
                )
            )}
    </Carousel>
    )
}

export default RepositoryList
