import React, { Component } from 'react';

class TexTyper extends Component{

    state= {
        text: this.props.text.substr(0, 0),
        counter: -1,
    };
    componentDidMount(){
        setTimeout(() => {
            this.id = setInterval(() => {
                const counter = this.state.counter+1;

                this.setState ({
                    counter: counter,
                    text: this.props.text.substr(0, counter+1),
                });

                if(this.state.counter === 8){
                    clearInterval(this.id);
                }
            }, 500)
        }, 600)
    }
    render(){
        return <span id="thirdWorld">{this.state.text}</span>
    }
}

class Home extends Component{
    render(){
        return <div id="home_background">
            <div id="text_box">
                <div className="fatPig"></div>
                <div className="text"><span id="firstWorld">Track</span> <span id="secondWorld">Your</span>
                    <TexTyper text="Intake!"/>
                </div>
            </div>
        </div>
    }
}
export default Home;
