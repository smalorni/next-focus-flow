//Using fetch calls to get all sessions, edit session, delete session, and create a new session, using axios

import axios from 'axios';

export const GetAllSessions = () => {
    return axios.get(`http://localhost:3000/sessions`)
        .then((res: { data: any; }) => res.data)
        .catch((error: any) => console.log('Error:', error));
}

//Fetch call to edit session
export const EditSession = (session) => {
    return axios.put(`http://localhost:3000/sessions/${session.id}`, session)
        .then((res: { data: any; }) => res.data)
        .catch((error: any) => console.log('Error:', error));
}

//Fetch call to delete session
export const DeleteSession = (session) => {
    return axios.delete(`http://localhost:3000/sessions/${session.id}`, session)
        .then((res: { data: any; }) => res.data)
        .catch((error: any) => console.log('Error:', error));
}

//Fetch call to create a new session
export const CreateSession = (session) => {
    return axios.post(`http://localhost:3000/sessions`, session)
        .then((res: { data: any; }) => res.data)
        .catch((error: any) => console.log('Error:', error));
}