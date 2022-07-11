import axios from 'axios'

const event = axios.create({
    baseURL : "https://ecommerceapi-shopapp.herokuapp.com/" ,
    
    //baseURL : "http://localhost:5000"
})


// axios.defaults.baseURL = 'http://myurl';
// axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default event