//Using fetch call to get user's login information, using axios
import axios from 'axios';

export const LoginUser = (user) => {
    return axios.post(`http://localhost:3000/login`, user)
        .then((res: { data: unknown; }) => res.data)
        .catch((error: unknown) => console.log('Error:', error));
}