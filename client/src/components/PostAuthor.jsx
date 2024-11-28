import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/images/avatar1.jpg";

const PostAuthor = () => {
    return (
        <Link to={`/posts/users/sdfsdf`} className="post_author">
            <div className="post_author-avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="post_author-details">
                <h5>By: Unknown Author</h5>
                <small>Just Now</small>
            </div>
        </Link>
    );
};

export default PostAuthor;
