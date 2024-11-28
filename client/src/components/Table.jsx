import { useState } from "react";
import { DUMMY_ENTRIES } from "../data";
import { Link } from "react-router-dom";

const Table = () => {
    const [entries, setEntries] = useState(DUMMY_ENTRIES);

    return (
        <div>
            <table>
                {entries.length > 0 ? (
                    <div className="container">
                        <tr>
                            <th>Company Name</th>
                            <th>Company Person Name</th>
                            <th>Company Email</th>
                            <th>Company Mobile</th>
                            <th>Company Address</th>
                            <th>Actions</th>
                        </tr>
                        {entries.map(({ comName, comPersonName, comEmail, comMobile, comAddress }) => (
                            <tr>
                                <th>{comName}</th>
                                <th>{comPersonName}</th>
                                <th>{comEmail}</th>
                                <th>{comMobile}</th>
                                <th>{comAddress}</th>
                                <th>
                                    <Link to={"/edit-entry"}>Edit</Link>
                                    <br />
                                    <Link to={"/delete-entry"}>Delete</Link>
                                </th>
                            </tr>
                        ))}
                    </div>
                ) : (
                    <h2 className="center">No Entries Found</h2>
                )}
            </table>
        </div>
    );
};

export default Table;
