import React from "react";
import  '../styles/ErrorBox.css';

const ErrorBox = ({ message }) => {
    if (!message) return null;
    return (
        <div className="error-box">
            {message}
        </div>
    );
};

export default ErrorBox;