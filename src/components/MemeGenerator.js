import React, {Component} from "react";
import Form from "./FormComponent";
import MemeContent from "./MemeContent";

const apiUrl = "https://api.imgflip.com/get_memes"

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
    };

    componentDidMount = () => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                isLoaded: true,
                allMemeImgs: memes
            })
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        const memes = this.state.allMemeImgs;
        const randomImage = memes[Math.floor(Math.random() * memes.length)]
        this.setState( {randomImg: randomImage.url} )
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <Form 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    data={this.state}
                />
                <MemeContent data={this.state}/>
            </div>
        )
    }
}

export default MemeGenerator;