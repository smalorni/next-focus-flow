//Using fetch call for the user to register, using axios
import axios from 'axios';

export const RegisterUser = (user) => {
    return axios.post(`http://localhost:3000/register`, user)
        .then((res: { data: any; }) => res.data)
        .catch((error: any) => console.log('Error:', error));
}