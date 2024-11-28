import React from "react";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="dashboard-head">
                <h2>Dashboard</h2>
                <Link className="btn primary" to={"/create-entry"}>
                    Create Entry
                </Link>
            </div>
            <Table />
        </section>
    );
};

export default Dashboard;
