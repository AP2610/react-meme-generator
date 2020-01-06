import React from "react";
import "../styles.css";

const Header = () => {
    return (
        <div>
            <header>
                <img
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                    alt="Problem?"
                />
                <p className="title">
                    Meme Generator
                </p>
            </header>
        </div>
    );
};

export default Header;