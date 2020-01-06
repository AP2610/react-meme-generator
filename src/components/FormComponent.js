import React from "react";
import "../styles.css";


const FormComponent = (props) => {
    return (
        <form className="meme-form" onSubmit={props.handleSubmit}>
            <input
                name="topText"
                value={props.data.topText}
                type="text"
                placeholder="Top text"
                onChange={props.handleChange}
            />
            <br />
            <input
                name="bottomText"
                value={props.data.bottomText}
                type="text"
                placeholder="Bottom Text"
                onChange={props.handleChange}
            />
            <br />
            <button>Generate</button>
        </form>
    )
};

export default FormComponent;