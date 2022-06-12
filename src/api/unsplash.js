import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vMpqtsvOTLPPO70D6mV4Cag_zM2yrNbZi1WOJk6Q5hE'
    }
})