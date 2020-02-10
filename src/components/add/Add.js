import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/auth";

export default function Add({ history }) {
    const { user, logoutUser } = useContext(AuthContext);

    const query = new URLSearchParams(window.location.search)

    const queryData = {}

    console.log("query param info " + query.get("data1"))
    query.forEach(function (value, key) {
        console.log(value, key)
        queryData[key] = value
    })

    console.log(queryData.url + "?t=" + queryData.t)

    const tagsArray = queryData.data1.split(',')

    const videoData = {
        url: queryData.url + "?t=" + queryData.t,
        title: queryData.data2,
        notes: queryData.data2,
        tags: tagsArray
    }

    //Docs for turning comma seperated values into array
    //https://www.tutorialrepublic.com/faq/how-to-convert-comma-separated-string-into-an-array-in-javascript.php

    useEffect(() => {
        // when redirected to /add, query params come through with the url
        if (user) {
            history.push("/add" + window.location.search);
            axios.put(`/api/items/add/${user.id}`, videoData).then((res) => {
                console.log(res)
            }).catch(() => {
                console.log("what happened")
            })
        }
    }, [user, history]);

    return (
        <>
            <div>Hello {user.name}</div>
            <button
                onClick={() => {
                    axios.put(`/api/items/add/${user.id}`, videoData).then((res) => {
                        console.log(res)
                    }).catch(() => {
                        console.log("what happened")
                    })
                }}
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