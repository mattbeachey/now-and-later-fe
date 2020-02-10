import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../auth/auth";

export default function Dashboard({ history, location }) {
  const { user, logoutUser } = useContext(AuthContext);
  const [userVideos, setUserVideos] = useState([])
  console.log(user)

  if (user){
    const query = new URLSearchParams(location.search)
    console.log("The Query" + query)
    const queryData = {}
  
    console.log("query param info " + query.get("data1"))
    query.forEach(function (value, key) {
        console.log("dashboard", key, value)
        queryData[key] = value
    }) 
    if (queryData.dest){
      query.delete("dest")
      console.log("The Query Again" + query)
      console.log("Long URL" + queryData.dest.split("/").filter(function(string, i){return i > 2}).join("/").split("?")[0] + query)
      history.push(queryData.dest.split("/").filter(function(string, i){return i > 2}).join("/").split("?")[0] + "?" + query)
    } 
  }


  useEffect(() => {
    axios.get(`/api/items/get/${user.id}`)
      .then(data => {
        console.log(data.data.saved_timestamps)
        setUserVideos(data.data.saved_timestamps)
      })
  }, []);

  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div direction="row" align="center" justify="center">
          <div>
            <h4>
              <b>Welcome</b> {user.name.split(" ")[0]}
              <p>
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              onClick={e => {
                e.preventDefault();
                logoutUser();
              }}
              label="Logout"
            >Logout</button>
            <div>
              {userVideos.map(video => (
                <ol>
                  <li>{video.title}: {video.notes} <a href={video.url} target="black">Link</a></li>
                </ol>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
