import React, { useContext, useState, useEffect } from "react";
import "./videoCont.css";


function VideoCont({ image, userTitle, notes, origName, url, tags, number, handleDelete, handleSetVideos, handleFilter }) {

    const [cardClass, setCardClass] = useState("mainContainer")


    useEffect(() => {
        if (number % 2 === 0) {
            if (number % 4 === 0) {
                setCardClass("mainContainer1")
            } else {
                setCardClass("mainContainer2")
            }

        }
        else {
            if ((--number) % 4 === 0) {
                setCardClass("mainContainer3")
            } else {
                setCardClass("mainContainer4")
            }

        }
    }, [number])


    return (
        <div className={cardClass}>
            <div className="imgCont">
                <a href={url} target="blank">
                    <img className="thumbnail" src={image} alt="video thumbnail" />
                </a>
            </div>
            <div className="contentCont">
                <div className="leftSide">
                    <a href={url} target="blank"><h1>{userTitle}</h1></a>
                    <div className="tagsHolder">
                        <div className="bolded">Tags: </div>
                    {tags.map(tag => (
                        <div onClick={() => handleSetVideos(handleFilter(tag))}>{tag} </div>
                    ))}
                    </div>
                    <h5>Original Video: {origName}</h5>
                </div>
                <div className="rightSide">
                    <div className="notes">
                        <p>Notes:</p>
                        <p>{notes}</p>
                    </div>
                    <p className="delete" onClick={handleDelete}>Delete this video</p>
                </div>
            </div>
        </div>

    )
}

export default VideoCont;