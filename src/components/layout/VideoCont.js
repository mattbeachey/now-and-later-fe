import React, { useContext, useState, useEffect }  from "react";
import "./videoCont.css";


function VideoCont({ image, userTitle, notes, origName, url, tags, number, handleDelete, handleSetVideos, handleFilter }) {

    const [cardClass, setCardClass] = useState("mainContainer")

    useEffect(() => {
        if (number%2 === 0){
            if (number%4 === 0){
                setCardClass("mainContainer1")
            } else {
                setCardClass("mainContainer2")
            }
            
        }
        else {
            if ((--number)%4 === 0){
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