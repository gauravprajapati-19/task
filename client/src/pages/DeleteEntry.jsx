import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteEntry = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    // To handle the deletion action
    const navigate = useNavigate();

    const handleDelete = () => {
        // Here, you would delete the entry from the database or state
        console.log("Entry deleted");
        // Redirect to the dashboard after deletion
        navigate("/dashboard");
    };

    const handleCancel = () => {
        // If the user cancels, navigate back to the dashboard or previous page
        navigate("/dashboard");
    };

    return (
        <section className="delete-entry">
            <div className="container">
                <h2>Delete Company Entry</h2>
                <p>Are you sure you want to delete this entry?</p>
                <div className="confirmation-buttons">
                    {/* <button className="btn danger" onClick={() => setIsConfirmed(true)}> */}
                    <button className="btn danger" onClick={handleCancel}>
                        Yes, Delete
                    </button>
                    <button className="btn secondary" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DeleteEntry;
