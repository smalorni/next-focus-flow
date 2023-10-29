//When a user click on the Flow Board navigation link, it will lead user to a new page where user can see all the flow board photos. The user will be able to add new photos to the flow board by clicking on the add button. The user will be able to edit new photos to the flow board by clicking on edit button. The user will also be able to delete the photos by clicking on the delete button.

import { useState, useEffect } from 'react';
import { GetAllBoards } from '../api/FlowBoard';

export default function FlowBoardList() {
    const [boards, setBoards] = useState([]);
    {/* set state for search function */}
    const [filteredBoard, setFilteredBoard] = useState([]);
    {/* set state for add new photo */}
    const [addBoard, setAddBoard] = useState([]);
    {/* set state for edit board */}
    const [editBoard, setEditBoard] = useState([]);
    {/* set state for delete board */}
    const [deleteBoard, setDeleteBoard] = useState([]);

    {/* fetch call to get all boards */}
    useEffect(() => {
        GetAllBoards()
            .then((response) => {
                setBoards(response);
                setFilteredBoard(response);
            })
    }, []);

    {/* search function to be able to search the comments by typing values in lower case or upper case */}
    const searchBoard = (evt: { target: { value: string; }; }) => {
        const searchBoardValue = evt.target.value.toLowerCase();
        const filteredBoardArray = boards.filter((board) => {
            return board.comments.toLowerCase().includes(searchBoardValue);
        });
        setFilteredBoard(filteredBoardArray);
    };


    {/* add new photo */}


}