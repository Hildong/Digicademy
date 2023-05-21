import axios from 'axios';

export default function validateJWT(user) {
    axios.get(`${process.env.REACT_APP_ENDPOINT}/validate`)
}