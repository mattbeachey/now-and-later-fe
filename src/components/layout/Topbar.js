import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar({ handleChange, handleReturn }){


    return (
        <div className="main">
            <div className="header">Now and Later</div>
            <input onChange={handleChange} placeholder="Search by name" />
            <button onClick={handleReturn}>Bring Back All</button>

        </div>
    )
    
}