import React, { Component } from 'react';
import Reset from './resetForm.js';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            box_1: 'hidden',
            box_2: 'hidden',
            email_error: '',
            pass_error: '',
            border_1: 'none',
            border_2: 'none',
            email: '',
            pass: '',
            classForm: '',
            classReset: 'stage1',
        };
    }
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
    mouseEnter2 = () => {
        this.setState({
            box_2: 'visible',
        })
    };
    mouseLeave2 = () => {
        this.setState({
            box_2: 'hidden',
        })
    };
    handleChange_1 = (e) => {
        this.setState({
            email: e.target.value,
        });
    };
    handleChange_2 = (e) => {
        this.setState({
            pass: e.target.value,
        })
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.email.length < 4) {
            this.setState({
                email_error: 'Invalid email address',
                border_1: '1px solid red',
            })
        }else{
            this.setState({
                email_error: '',
                border_1: '',
            })
        }
        if(this.state.pass.length < 5){
            this.setState({
                pass_error: 'Invalid password',
                border_2: '1px solid red',
            })
        }else{
            this.setState({
                pass_error: '',
                border_2: '',
            })
        }
    };
    handleClick = () => {
        this.setState({
            classForm: "fadeOutUp animateUp",
            classReset: "fadeIn stage2",
            email_error: '',
            pass_error: '',
            border_1: 'none',
            border_2: 'none',
            email: '',
            pass: '',
        });
    };
    stageToggle = () => {
        this.setState({
            classReset: "fadeOut stage3",
            classForm: "fadeInDown animateIn",
        });
        setTimeout(function(){ window.location.reload(true)}, 2900);
    };
    render() {
        return <section>
            <div className={this.state.classForm}>
                <div className="form">
                    <div className="head_form">
                        <div className="head_icon" style={{backgroundImage:"../../images/chewbacca-icon.jpeg"}} alt="chewbacca face"></div>
                    </div>
                    <form method="post" onSubmit={this.onSubmit}>
                        <p className="inputs">EMAIL ADDRESS</p>
                        <div className="required" style={{visibility: this.state.box_1}}>required</div>
                        <div className="inputs_container">
                            <input name="email" type="text" value={this.state.email} placeholder="Enter your email address" onChange={this.handleChange_1} style={{border: this.state.border_1}}/>
                            <p className="error">{this.state.email_error}</p>
                            <div className="triangle_box">
                                <div className="triangle" onMouseEnter={this.mouseEnter1} onMouseLeave={this.mouseLeave1}></div>
                            </div>
                        </div>
                        <p className="inputs">PASSWORD</p>
                        <div className="required" style={{visibility: this.state.box_2}}>required</div>
                        <div className="inputs_container">
                            <input type="password" value={this.state.pass} placeholder="Enter your password" onChange={this.handleChange_2} style={{border: this.state.border_2}}/>
                            <p className="error">{this.state.pass_error}</p>
                            <div className="triangle_box">
                                <div className="triangle" onMouseEnter={this.mouseEnter2} onMouseLeave={this.mouseLeave2}></div>
                            </div>
                        </div>
                        <input id="check_Box" type="checkbox"/><span>REMEMBER ME</span>
                        <div className="footer_form">
                            <div id="footer_container">
                                <p className="forgotten_pass" onClick={this.handleClick}>Forgotten password?</p>
                                <input type="submit" value="LOGIN"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Reset newClass={this.state.classReset} stageToggle={this.stageToggle}/>
        </section>
    }
}


export default App;