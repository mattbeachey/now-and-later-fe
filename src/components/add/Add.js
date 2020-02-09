import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/auth";

export default function Add( {history}) {
    const { user, logoutUser } = useContext(AuthContext);
    const [url, setUrl] = useState()
    const [title, setTitle] = useState()
    const [notes, setNotes] = useState()
    const [tags, setTags] = useState()

    const query = new URLSearchParams(window.location.search)

    const queryData = {}

    console.log("query param info " + query.get("data1"))
    query.forEach(function(value, key){
        console.log(value, key)
        queryData[key] = value
    })

    console.log(queryData.url + "?t=" + queryData.t)

    useEffect(() => {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (user) {
          history.push("/add" + window.location.search);
        }
      }, [user, history]);

    return (
        <>
            <div>Hello {user.name}</div>
            {/* <input placeholder="timestamp url"/>
            <input placeholder="title"/>
            <input placeholder="notes"/>
            <input placeholder="tags"/> */}
            <button
                  onClick={() => {
                    axios.get("/ping").then(() => {
                        console.log("should be working")
                    }).catch(()=> {
                        console.log("what happened")
                    })
                  }}
                  label="JOIN"
                  >Add</button>
            <button
                onClick={e => {
                    e.preventDefault();
                    logoutUser();
                }}
                label="Logout"
            >Logout</button>
        </>

    )
} 

Add.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };