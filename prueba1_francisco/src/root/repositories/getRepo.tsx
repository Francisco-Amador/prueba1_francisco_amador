import axios from "axios"
import {Repository} from "../../pages/index" 

export function getRepositories(){
    return  axios.get <Repository[]>("https://api.github.com/users/chizk0/repos", {})

  }