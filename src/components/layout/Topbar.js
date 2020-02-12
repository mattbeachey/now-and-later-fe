import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

import { AuthContext } from "../../auth/auth";

export default function Topbar({ handleChange, handleReturn }){

    const { user, logoutUser } = useContext(AuthContext);


    return (
        <div className="main">
            <div className="header">Now and Later</div>
            <input className="searchInput" onChange={handleChange} placeholder="Search by name" />
            <button onClick={handleReturn}>Show All</button>
            <h2>Welcome {user.name.split(" ")[0]}</h2>
            <button onClick={e => {
              e.preventDefault();
              logoutUser();
            }}>Log Out</button>
        </div>
    )
    
}