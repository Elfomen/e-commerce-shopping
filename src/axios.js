import axios from 'axios'

const event = axios.create({
    baseURL : "https://ecommerceapi-shopapp.herokuapp.com/" ,
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json' ,
      }
    
})

// const event = axios.create({
//     baseURL : "http://localhost:8000/" ,
//     headers: {
//         'content-type': 'application/json',
//         // 'Accept': 'application/json' ,
//         // "Access-Control-Allow-Origin": true
//       }
    
// })

export default event