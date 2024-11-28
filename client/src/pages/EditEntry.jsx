import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EditEntry = () => {
    const initialData = {
        comName: "Arya Enterprises",
        comPersonName: "Mr. Ravi Kumar",
        comEmail: "ravikumar@arya.com",
        comMobile: "9876543210",
        comAddress: "1234 MG Road, Bangalore, Karnataka",
    };

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Data:", formData);
        navigate("/dashboard");
    };

    return (
        <section className="edit-entry">
            <div className="container">
                <h2>Edit Company Details</h2>
                <form onSubmit={handleSubmit} className="form register_form">
                    <div>
                        <label htmlFor="comName">Company Name</label>
                        <input type="text" id="comName" name="comName" value={formData.comName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="comPersonName">Contact Person Name</label>
                        <input type="text" id="comPersonName" name="comPersonName" value={formData.comPersonName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="comEmail">Company Email</label>
                        <input type="email" id="comEmail" name="comEmail" value={formData.comEmail} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="comMobile">Company Mobile</label>
                        <input type="text" id="comMobile" name="comMobile" value={formData.comMobile} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="comAddress">Company Address</label>
                        <textarea id="comAddress" name="comAddress" value={formData.comAddress} onChange={handleChange} required />
                    </div>
                    <div>
                        <button type="submit" className="btn primary">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditEntry;
