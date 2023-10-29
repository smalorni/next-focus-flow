//Using fetch calls to user's all boards, edit board, delete board, and create a new board, using axios

//might still need to install axios?
import axios from 'axios';

//Fetch call to get all boards
export const GetAllBoards = () => {
    return axios.get(`http://localhost:3000/boards`)
        .then((res: { data: unknown; }) => res.data)
        .catch((error: unknown) => console.log('Error:', error));
}

//Fetch call to create a new board
export const AddBoard = (board) => {
    return axios.post(`http://localhost:3000/boards`, board)
        .then((res: { data: unknown; }) => res.data)
        .catch((error: unknown) => console.log('Error:', error));
}

//Fetch call to edit board
export const EditBoard = (board) => {
    return axios.put(`http://localhost:3000/boards/${board.id}`, board)
        .then((res: { data: unknown; }) => res.data)
        .catch((error: unknown) => console.log('Error:', error));
}

//Fetch call to delete board
export const DeleteBoard = (board) => {
    return axios.delete(`http://localhost:3000/boards/${board.id}`, board)
        .then((res: { data: unknown; }) => res.data)
        .catch((error: unknown) => console.log('Error:', error));
}