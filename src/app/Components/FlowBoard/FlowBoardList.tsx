//When a user click on the Flow Board navigation link, it will lead user to a new page where user can see all the flow board photos. User should be able to click on buttons to either add new board, edit current board or delete board. User should be able to search for a board by typing into the search.

import { useState, useEffect } from 'react';
import { GetAllBoards, DeleteBoard, EditBoard, AddBoard } from '../../api/FlowBoard';
import DeleteBoardModal from './DeleteBoardModal';
import EditBoardModal from './EditBoardModal';
import AddNewBoard from './AddNewBoard';

export default function FlowBoardList() {
    const [boards, setBoards] = useState([]);
    {/* set state for search function */}
    const [filteredBoard, setFilteredBoard] = useState([]);
    {/* set state for delete board function */}
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    {/* set state for delete board function */}
    const [deleteBoard, setDeleteBoard] = useState(null);
    {/* set state for edit board function */}
    const [editBoard, setEditBoard] = useState(null);
    {/* set state for add board function */}
    const [addBoard, setAddBoard] = useState(null);

    {/* fetch call to get all boards using axios */}
    useEffect(() => {
        // Fetch call to get all boards
        GetAllBoards()
            .then((response: unknown[]) => {
                setBoards(response);
                setFilteredBoard(response);
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

    {/* edit board function */}
    const handleEdit = (boardId: number) => {
        const board = boards.find((board) => board.id === boardId);
        setEditBoard(board);
    };

    {/* delete board function */}
    const handleDelete = (boardId: number) => {
        setDeleteBoard({ id: boardId }); // set the board to be deleted
        setIsDeleteModalOpen(true); // open the delete board modal
    };

    {/* add board function */}
    const handleAddBoard = (newBoard: unknown) => {
        setAddBoard(newBoard);
    };

    {/* add board useEffect */}
    useEffect(() => {
        if (addBoard) {
            //Call API function
            AddBoard(addBoard)
                .then((newBoard) => {
                    {/* update the state to add new board */}
                    setBoards((updatedBoard) => [...updatedBoard, newBoard]);
                    setAddBoard(null); //reset the add board state
                })
                .catch((error) => console.log('Error adding board:', error));
        }
    }, [addBoard]); //only run when addBoard state changes

    {/* edit board useEffect */}
    useEffect(() => {
        if (editBoard) {
            //Call API function
            EditBoard(editBoard)
                .then(() => {
                    {/* update the state to remove deleted board */}
                    setBoards((updatedBoard) => updatedBoard.map((board) => {
                        if (board.id === editBoard.id) {
                            return editBoard;
                        } else {
                            return board;
                        }
                    }));
                    setEditBoard(null); //reset the edit board state
                })
                .catch((error) => console.log('Error editing board:', error));
        }
    }, [editBoard]); //only run when editBoard state changes

    {/* delete board useEffect */}

    useEffect(() => {
        if (deleteBoard) {
            //Call API function
            DeleteBoard(deleteBoard.id)
                .then(() => {
                    {/* update the state to remove deleted board */}
                    setBoards((removedBoard) => removedBoard.filter((board) => board.id !== deleteBoard.id));
                    setIsDeleteModalOpen(false); //close the modal
                    setDeleteBoard(null); //reset the delete board state
                })
                .catch((error) => console.log('Error deleting board:', error));
        }
    }, [deleteBoard]); //only run when deleteBoard state changes

    {/* render the list of boards */}
        return (
            <>
            <header>
                <h2 className='text-center'>My Focus Flow</h2>
                <input type='text' placeholder='Search for board' onChange={searchBoard} />
            </header>
            <div>
                <button>📌 PIN NEW IDEA</button>
            </div>

            {/* Card UI for each board */}
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            {/* map through the boards */}
            {filteredBoard.map((board) => {
                return (
                    <>
                        <img className='w-full' src={board.url} />
                        <div className='px-6 py-4'>
                            <p className='text-gray-700 text-base'>{board.comments}</p>
                        </div>
                        {/* Add edit and delete buttons */}
                        <div className='px-6 pt-4 pb-2'>
                            <button onClick={() => handleEdit(board.id)}>✏️ EDIT</button>
                            {/* Edit board modal */}
                            <EditBoardModal
                                openEditModal={editBoard !== null}
                                closeEditModal={() => setEditBoard(null)}
                                information={editBoard}
                                onSave={(editedInfo) => setEditBoard({ ...editBoard, ...editedInfo })}
                            />
                            <button onClick={() => handleDelete(board.id)}>❌ DELETE</button>
                        </div>
                        {/* Delete board modal */}
                        <DeleteBoardModal
                        openDeleteModal={isDeleteModalOpen}
                        closeDeleteModal={() => setIsDeleteModalOpen(false)}
                        onDelete={() => handleDelete(board.id)}
                        message='Are you sure you want to delete this board? This action cannot be undone.'
                        />
                    </>
                );
            })}
            </div>
            </>
        );
    }