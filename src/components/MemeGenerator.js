import React, {Component} from "react";

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
        console.log(this.state)
        const name = this.state.isLoaded ?  this.state.allMemeImgs[0].name : "Loading..."
        return (
            <div>
                <p>{name} </p>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="topText" 
                        value={this.state.topText} 
                        type="text" 
                        placeholder="Top text" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        type="text" 
                        placeholder="Bottom Text" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button>Generate</button>
                </form>
                <div>
                    <img src={this.state.randomImg}/>
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomtext}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;