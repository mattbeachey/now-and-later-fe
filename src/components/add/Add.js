import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/auth";

export default function Add({ history }) {
    const { user, logoutUser } = useContext(AuthContext);
    console.log("Add component" , user)

    const query = new URLSearchParams(window.location.search)

    const queryData = {}

    console.log("query param info " + query.get("data1"))
    query.forEach(function (value, key) {
        console.log(value, key)
        queryData[key] = value
    })

    console.log(queryData.url + "?t=" + queryData.t)

    const tagsArray = queryData.tags.split(',')
    const videoCode = queryData.url.split('be/')[1]

    console.log("VIDEO CODE>>>>>>>>>>>>>" + queryData.url.split('be/')[1])

    const videoData = {
        url: queryData.url + "?t=" + queryData.t,
        videoThumbnail: "https://img.youtube.com/vi/" + videoCode + "/0.jpg",
        videoName: queryData.videoName,
        title: queryData.title,
        notes: queryData.notes,
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
                // chrome.runtime.sendMessage({
                //     data: "Hello popup, how are you"
                // }, function (response) {
                //     console.dir(response);
                // });
                // window.close();
                setTimeout(function(){
                    history.push("/dashboard");
                }, 2000)
                
            }).catch(() => {
                console.log("what happened")
            })
        }
    }, [user, history]);

    return (
        <>
            {/* <div>Hello {user.name}, your video timestamp has been saved! See all saved timestamps here.</div>
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
            >Logout</button> */}
        </>

    )
}

Add.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};