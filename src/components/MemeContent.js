import React from "react";
import "../styles.css";

const MemeText = (props) => {
    return (
        <div className="meme">
            <img src={props.data.randomImg} alt="A random meme image" />
            <h2 className="top">{props.data.topText}</h2>
            <h2 className="bottom">{props.data.bottomText}</h2>
        </div>
    )
}

export default MemeText;