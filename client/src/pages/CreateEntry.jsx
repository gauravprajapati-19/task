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
                        <input
                            type="text"
                            id="comName"
                            name="comName"
                            value={formData.comName} // This is controlled by state
                            onChange={handleChange}
                            required
                            placeholder="Company Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="comPersonName"
                            name="comPersonName"
                            value={formData.comPersonName} // Controlled field
                            onChange={handleChange}
                            required
                            placeholder="Contact Person Name"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="comEmail"
                            name="comEmail"
                            value={formData.comEmail} // Controlled field
                            onChange={handleChange}
                            required
                            placeholder="Company Email"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="comMobile"
                            name="comMobile"
                            value={formData.comMobile} // Controlled field
                            onChange={handleChange}
                            required
                            placeholder="Company Mobile"
                        />
                    </div>
                    <div>
                        <textarea
                            id="comAddress"
                            name="comAddress"
                            value={formData.comAddress} // Controlled field
                            onChange={handleChange}
                            required
                            placeholder="Company Address"
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
