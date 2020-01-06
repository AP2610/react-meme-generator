import React, {Component} from "react";

const apiUrl = "https://api.imgflip.com/get_memes"

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            topText: "",
            bottomText: "",
            image: "http://i.imgflip.com/1bij.jpg"
        };
    };

    componentDidMount = () => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
    
    render() {
        return (
        <h2>Data: </h2>
        )
    }
}

export default MemeGenerator;