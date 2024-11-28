import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEntry = () => {
    // Initial data should be empty for creating a new entry
    const initialData = {
        comName: "",
        comPersonName: "",
        comEmail: "",
        comMobile: "",
        comAddress: "",
    };

    // Set the state with empty data for the new entry form
    const [formData, setFormData] = useState(initialData);

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Navigate after form submission
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Entry Data:", formData);
        // Here you can call an API or update the global state with formData
        navigate("/dashboard"); // Redirect after saving
    };

    return (
        <section className="create-entry">
            <div className="container">
                <h2>Create New Entry</h2>
                <form onSubmit={handleSubmit} className="form create_form">
                    <div>
                        <label htmlFor="comName">Company Name</label>
                        <input
                            type="text"
                            id="comName"
                            name="comName"
                            value={formData.comName} // This is controlled by state
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="comPersonName">Contact Person Name</label>
                        <input
                            type="text"
                            id="comPersonName"
                            name="comPersonName"
                            value={formData.comPersonName} // Controlled field
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="comEmail">Company Email</label>
                        <input
                            type="email"
                            id="comEmail"
                            name="comEmail"
                            value={formData.comEmail} // Controlled field
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="comMobile">Company Mobile</label>
                        <input
                            type="text"
                            id="comMobile"
                            name="comMobile"
                            value={formData.comMobile} // Controlled field
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="comAddress">Company Address</label>
                        <textarea
                            id="comAddress"
                            name="comAddress"
                            value={formData.comAddress} // Controlled field
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn primary">
                            Create Entry
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateEntry;
