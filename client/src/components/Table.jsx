import { useState } from "react";
import { DUMMY_ENTRIES } from "../data";
import { Link } from "react-router-dom";

const Table = () => {
    const [entries, setEntries] = useState(DUMMY_ENTRIES);

    return (
        <div className="table-container mt-3">
            {entries.length > 0 ? (
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Company Person Name</th>
                            <th>Company Email</th>
                            <th>Company Mobile</th>
                            <th>Company Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map(({ comName, comPersonName, comEmail, comMobile, comAddress }, index) => (
                            <tr key={index}>
                                <td>{comName}</td>
                                <td>{comPersonName}</td>
                                <td>{comEmail}</td>
                                <td>{comMobile}</td>
                                <td>{comAddress}</td>
                                <td>
                                    <Link to="/edit-entry" className="btn primary">
                                        Edit
                                    </Link>
                                    <Link to="/delete-entry" className="btn danger">
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2 className="center">No Entries Found</h2>
            )}
        </div>
    );
};

export default Table;
