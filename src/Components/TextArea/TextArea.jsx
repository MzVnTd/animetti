import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const TextArea = ({ commentText, handleSendClick, handleTextChange }) => {

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">New comment</h6>
                <textarea
                    value={commentText}
                    onChange={handleTextChange}
                    placeholder="Enter your comment here"
                    class="form-control"
                ></textarea>
                <br/>
                <button className="btn btn-primary" onClick={handleSendClick}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default TextArea;
