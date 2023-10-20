//Using fetch call to get the user's login data, using axios
import axios from 'axios';

export const LoginUser = (user) => {
    return axios.post(`http://localhost:3000/login`, user)
        .then((res: { data: any; }) => res.data)
        .catch((error: any) => console.log('Error:', error));
}