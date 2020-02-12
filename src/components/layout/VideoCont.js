import React from "react";
import "./videoCont.css";


function VideoCont({ image, userTitle, notes, origName, url, tags, handleDelete, handleSetVideos, handleFilter }) {


    return (
        <div className="mainContainer">
            <div className="imgCont">
                <a href={url} target="blank">
                    <img className="thumbnail" src={image} alt="video thumbnail" />
                </a>
            </div>
            <div className="contentCont">
                <h5>{userTitle}</h5>
                <h5>{origName}</h5>
                <p>{notes}</p>
                <a href={url} target="blank">Link</a>
                {tags.map(tag => (
                    <div onClick={ () => handleSetVideos(handleFilter(tag))}>{tag}</div>
                ))}
                <p onClick={handleDelete}>X</p>
            </div>
        </div>

    )
}

export default VideoCont;