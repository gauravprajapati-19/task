import React from "react";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <section className="dashboard mt-3">
            <div className="dashboard-main">
                <div className="dashboard-head">
                    <h3>Entries</h3>
                    <Link className="btn primary" to={"/create-entry"}>
                        Create Entry
                    </Link>
                </div>
                <Table />
            </div>
        </section>
    );
};

export default Dashboard;
