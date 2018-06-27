import React from "react";
import "../style/reset_state.css";

class Reset extends React.Component{
    state = {
        box_1: 'hidden',
    };
    mouseEnter1 = () => {
        this.setState({
            box_1: 'visible',
        })
    };
    mouseLeave1 = () => {
        this.setState({
            box_1: 'hidden',
        })
    };

    render(){
        return <div className={this.props.newClass}>
            <div className="reset_form">
                <div className="head_form">
                    <div className="head_icon"></div>
                </div>
                <h1 className="header">reset password</h1>
                <p className="instruction">Hey. It happens to everyone.<br/>
                    Just let us know what email address use to login and we'll send you an email with instructions.</p>
                <p className="inputs">EMAIL ADDRESS</p>
                <div id="reset_required" style={{visibility: this.state.box_1}}>required</div>
                <div className="reset_inputs_container">
                    <input name="email" type="text"/>
                    <div className="triangle_box">
                        <div className="triangle" onMouseEnter={this.mouseEnter1} onMouseLeave={this.mouseLeave1}></div>
                    </div>
                </div>
                <div className="footer_form">
                    <button id="cancel_button" onClick={this.props.stageToggle}>cancel</button>
                    <button id="reset_button">reset password</button>
                </div>
            </div>
        </div>
    }
}
export default Reset;