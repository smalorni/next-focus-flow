import { useState } from 'react';

//This interface specifies the expected structure of the props that can be passed to the EditBoard component.
interface EditModalProps {
    openEditModal: boolean;
    closeEditModal: () => void;
    information: {
        url: string;
        comments: string;
        userId: number;
    };
     //It's a callback function that should be called when the user confirms the edit action. It specifies what action to take when the user clicks the "Save" button. Expects a function that takes no arguments and returns void.
    onSave: (editedInfo: { url: string; comments: string, userId: number }) => void;
}

export default function EditBoardModal({ openEditModal, closeEditModal, information, onSave }: EditModalProps) {
    //set state for edit modal
    const [editedInfo, setEditedInfo] = useState(information);

    //create a function to handle the edit
    const handleSave = () => {
        onSave(editedInfo); // Call the onSave callback with the edited information
        closeEditModal(); // Close the edit modal
  };

    //return the information to be edited
    return (
        <div className={`modal ${openEditModal ? 'open' : 'closed'}`}>
            <div className="modal-content">
                <h2>Edit Your Board</h2>
                <label htmlFor="url">URL:</label>
                <input
                    type="text"
                    id="url"
                    value={editedInfo.url}
                    placeholder='Enter URL'
                    onChange={(evt) => setEditedInfo({ ...editedInfo, url: evt.target.value })}
                />
                <label htmlFor="comments">Comments:</label>
                <textarea
                    id="comments"
                    value={editedInfo.comments}
                    placeholder='Enter Comments'
                    onChange={(evt) => setEditedInfo({ ...editedInfo, comments: evt.target.value })}
                />
                <div className="modal-buttons">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={closeEditModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
}