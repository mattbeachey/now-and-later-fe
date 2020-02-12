import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";

import VideoCont from "../layout/VideoCont"

import { AuthContext } from "../../auth/auth";

export default function Dashboard({ history, location }) {
  const { user, logoutUser } = useContext(AuthContext);
  const [userVideos, setUserVideos] = useState([])
  const [rerender, setRerender] = useState(0)

  //handles passing query parameters with redirects
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


  //sets saved user data to render, renders when "rerender" changed
  useEffect(() => {
    axios.get(`/api/items/get/${user.id}`)
      .then(data => {
        console.log(data.data.saved_timestamps)
        setUserVideos(data.data.saved_timestamps)
      })
  }, [rerender]);

  function deleteItem (id) {
    const r = window.confirm("Are you sure you want to delete this video?");
    if (r === true) {
      axios.delete(`/api/items/delete/${id}-${user.id}`)
      .then(res => {
        setRerender(rerender + 1)
        console.log(rerender)
        console.log(res)
      })
      .catch(err =>
        console.log(err))
    } else {
      return;
    }
  }
  
  function filterByTag(tag){
    const array = userVideos.filter(function (video){
      return  video.tags.indexOf(tag) > -1
    })
    return array 
  }

  return (
    <>
      <div
        style={{
          minHeight: "80vh",
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
                <VideoCont 
                image={video.videoThumbnail}
                userTitle={video.title}
                notes={video.notes}
                origName={video.videoName}
                url={video.url}
                tags={video.tags}
                handleDelete={() => deleteItem(video._id)}
                handleSetVideos={setUserVideos}
                handleFilter={filterByTag}
                />

                  // <li><img src={video.videoThumbnail} width="200px" alt="video thumbnail"/>
                  // {video.title}: {video.notes} <a href={video.url} target="black">Link</a>
                  // <div onClick={() => deleteItem(video._id)}>X</div></li>
           
                  
               
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
