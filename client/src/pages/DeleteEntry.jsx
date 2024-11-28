import React from "react";
import { Link } from "react-router-dom";

const DeleteEntry = () => {
    return (
        <div>
            <h2>Are you sure you want to delete the entry??</h2>
            <Link to={"/dashboard"}>Yes</Link>
            <Link to={"/dashboard"}>No</Link>
        </div>
    );
};

export default DeleteEntry;
