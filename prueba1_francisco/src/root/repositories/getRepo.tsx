import {Repository} from "../../pages/index" 

export function getRepositories(){
    const url = `https://api.github.com/users/chizk0/repos`;
  
    return fetch(url)
  }