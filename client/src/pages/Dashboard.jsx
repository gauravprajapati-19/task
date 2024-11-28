import React, { useState } from "react";

const Dashboard = () => {
    const [companies, setCompanies] = useState([
        {
            comName: "ABC Corp",
            comPersonName: "John Doe",
            comEmail: "johndoe@abc.com",
            comMobile: "1234567890",
            comAddress: "123 Main St, City, Country",
        },
        {
            comName: "XYZ Inc",
            comPersonName: "Jane Smith",
            comEmail: "janesmith@xyz.com",
            comMobile: "0987654321",
            comAddress: "456 Elm St, City, Country",
        },
    ]);

    return (
        <div className="container mt-4">
            <h2>Company Details</h2>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Contact Person</th>
                        <th>Contact Email</th>
                        <th>Contact Mobile</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{company.comName}</td>
                            <td>{company.comPersonName}</td>
                            <td>{company.comEmail}</td>
                            <td>{company.comMobile}</td>
                            <td>{company.comAddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
