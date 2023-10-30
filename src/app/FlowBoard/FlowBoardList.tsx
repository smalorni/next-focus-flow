//When a user click on the Flow Board navigation link, it will lead user to a new page where user can see all the flow board photos. User should be able to click on buttons to either add new board, edit current board or delete board. User should be able to search for a board by typing into the search.

import { useState, useEffect } from 'react';
import { GetAllBoards } from '../api/FlowBoard';

export default function FlowBoardList() {
    const [boards, setBoards] = useState([]);
    {/* set state for search function */}
    const [filteredBoard, setFilteredBoard] = useState([]);
    // {/* set state for add new photo */}
    // const [addBoard, setAddBoard] = useState([]);
    // {/* set state for edit board */}
    // const [editBoard, setEditBoard] = useState([]);
    // {/* set state for delete board */}
    // const [deleteBoard, setDeleteBoard] = useState([]);

    {/* fetch call to get all boards using axios */}
    useEffect(() => {
        // Fetch call to get all boards
        GetAllBoards()
            .then((response) => {
                setBoards(response);
            })
            .catch((error) => console.log('Error:', error));
    }, []);

    {/* search function to be able to search the comments by typing values in lower case or upper case */}
    const searchBoard = (evt: { target: { value: string; }; }) => {
        const searchBoardValue = evt.target.value.toLowerCase();
        const filteredBoardArray = boards.filter((board) => {
            return board.comments.toLowerCase().includes(searchBoardValue);
        });
        setFilteredBoard(filteredBoardArray);
    };

    {/* render the list of boards */}
    return (
        <>
        <header>
            <h2 className='text-center'>My Focus Flow</h2>
                <input
                    type='text'
                    placeholder='Search for board'
                    onChange={searchBoard}
                />
        </header>
            <div>
                <button>
                    📌 PIN NEW IDEA
                </button>
            </div>

            {/* Card UI for each board */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                {/* map through the boards */}
                {filteredBoard.map((board) => {
                    return (
                        <>
                            <img className="w-full" src={board.url} />
                            <div className="px-6 py-4">
                                <p className="text-gray-700 text-base">
                                    {board.comments}
                                </p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    
)

}