import axios from 'axios'

//This is used to give back a connector
export default()=>{
    return axios.create(
        {
            baseURL:'http://localhost:8081/'
        }
    )
}