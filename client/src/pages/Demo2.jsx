import React, { useState, useEffect } from "react";
import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";
import { Link } from "react-router-dom";

const App = () => {
    // State to track user type (User/Organization)
    const [userType, setUserType] = useState("User");

    // State for the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slider content (can be replaced with images)
    const slides = [img1, img2, img3];

    // Automatically move slider every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slides.length]);

    // Function to handle user type toggle
    const handleToggle = (type) => {
        setUserType(type);
    };

    // Function to handle dot click for slider
    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="demo-container mt-3">
            {/* Toggle Section */}
            <div className="toggle-section">
                <h2>Who are you?</h2>
                <div className="toggle">
                    <button className={`toggle-button ${userType === "User" ? "active" : ""}`} onClick={() => handleToggle("User")}>
                        User
                    </button>
                    <button className={`toggle-button ${userType === "Organization" ? "active" : ""}`} onClick={() => handleToggle("Organization")}>
                        Organization
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="content-section">
                {/* Left: Illustration / Slider */}
                <div className="illustration">
                    <div className="image-placeholder">
                        <img alt="img" src={slides[currentSlide]} />
                    </div>
                    {/* Slider dots */}
                    <div className="dots">
                        {slides.map((_, index) => (
                            <div key={index} className={`dot ${currentSlide === index ? "active" : ""}`} onClick={() => handleDotClick(index)}></div>
                        ))}
                    </div>
                </div>

                {/* Right: Form Section */}
                <div className="form-section">
                    <h2>Welcome, {userType}</h2>
                    <p>
                        Already registered? <Link to={"/demo"}>Login</Link>
                    </p>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="User ID" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;
