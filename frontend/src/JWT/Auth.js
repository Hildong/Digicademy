import axios from 'axios';

const validateJWT = new Promise((resolve, reject) => {
    axios.get(`${process.env.REACT_APP_ENDPOINT}/validateJWT`, {withCredentials: true})
    .then(res => {
        console.log(res.data.authorized)
        resolve(res.data.authorized)  
    })
})

export default validateJWT;