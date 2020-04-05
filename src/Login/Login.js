import React, { Component } from 'react'
import './Login.scss'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let params = {
            username: this.state.username,
            password: this.state.password
        };

        console.log("user information", params);
    }

    render() {
        return (
            <div className="row mainContainer">
                <div className="col-md-8 col-lg-4 col-xs-12 loginContainer">
                    <div className="login-div">
                        <div className="logo animated bounceInDown delay-1s faster"></div>

                        <div className="title">X-LMS</div>

                        {/* <div className="sub-title">BETA</div> */}

                        <form autoComplete="off">
                            <div className="fields">

                                <div className="row username">
                                    <div className="col-lg-2 col-md-2 col-xs-2 eachBox">
                                        <i className="fa fa-envelope fa-lg fa-fw emailicon" id="hello" aria-hidden="true"
                                         style={{fontSize:"19px"}}
                                        ></i>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-xs-10 eachBox">
                                        <input type="text" name="username" className="user-input" placeholder="username"
                                            onChange={e => {
                                                console.log("eeee", e.target.value.length)
                                                if (e.target.value.length > 0) {
                                                    e.target.classList.add("test");
                                                    document.getElementById('hello').style.color = "#1d5691";
                                                }
                                                this.setState({ username: e.target.value });
                                            }} />
                                    </div>

                                </div>

                                <div className="row password">
                                    <div className="col-lg-2 col-md-2 col-xs-2 eachBox">
                                        <i className="fa fa-unlock-alt fa-lg fa-fw passwordicon" id="hello2" aria-hidden="true"
                                        style={{fontSize:"25px"}}
                                      ></i>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-xs-10 eachBox">
                                        <input type="password" name="password" className="pass-input" placeholder="password"
                                            onChange={e => {
                                                if (e.target.value.length > 0) {
                                                    document.getElementById('hello2').style.color = "#5bc6a4";
                                                }
                                                this.setState({ password: e.target.value });
                                            }} />
                                    </div>
                                </div>
                                <div className="buttonDiv">
                                    <button className="signin-button" onClick={e => { this.handleSubmit(e); }}>login</button>

                                </div>

                            </div>
                        </form>

                        <div className="row socialMedia">
                            <div className=" eachSocialBox">
                            <i className="fa fa-google  fa-fw" aria-hidden="true" title="Google SignIn"></i>
                            </div>
                            <div className=" eachSocialBox">
                            <i className="fa fa-facebook fa-fw" aria-hidden="true" title="Facebook SignIn"></i>
                            </div>
                            <div className="eachSocialBox">
                            <i className="fa fa-instagram  fa-fw" aria-hidden="true" title="Instagram SignIn"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
