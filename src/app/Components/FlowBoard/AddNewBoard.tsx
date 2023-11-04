import React, { useState } from 'react';

interface AddBoardProps {
    openAddModal: boolean;
    closeAddModal: () => void;
    information: {
        url: string;
        comments: string;
        userId: number;
    };

    onSave: (editedInfo: { url: string; comments: string, userId: number }) => void;
}
export default function AddNewBoard({ openAddModal, closeAddModal, information, onSave }: AddBoardProps) {
    //set state for add modal
    const [addNewBoard, setAddNewBoard] = useState(information);

    //create a function to add a new board to the list
    const handleAddBoard = () => {
        onSave(addNewBoard); // Call the onSave callback with the edited information
        closeAddModal(); // Close the add modal
    };


    //return the information to be add a new board
    return (
        <div className={`modal ${openAddModal ? 'open' : 'closed'}`}>
            <div className="modal-content">
                <h2>Edit Your Board</h2>
                <label htmlFor="url">URL:</label>
                <input
                    type="text"
                    id="url"
                    value={addNewBoard.url}
                    placeholder='Enter URL'
                    onChange={(evt) => setAddNewBoard({ ...addNewBoard, url: evt.target.value })}
                />
                <label htmlFor="comments">Comments:</label>
                <textarea
                    id="comments"
                    value={addNewBoard.comments}
                    placeholder='Enter Comments'
                    onChange={(evt) => setAddNewBoard({ ...addNewBoard, comments: evt.target.value })}
                />
                <div className="modal-buttons">
                    <button onClick={handleAddBoard}>Save</button>
                    <button onClick={closeAddModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
