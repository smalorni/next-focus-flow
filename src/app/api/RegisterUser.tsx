//Using fetch call to register a new user, using axios
import axios from 'axios';

export const RegisterUser = (user) => {
    return axios.post(`http://localhost:3000/register`, user)
        .then((res: { data: unknown; }) => res.data)
        .catch((error: unknown) => console.log('Error:', error));
}