import React from "react";
import "./LoginScreen.css";

function LoginScreen(){
    return(
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                  className="loginScreen_logo"
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                  alt="Netflix_logo"                
                />
                <button className="loginScreen_button">
                    Sign In
                </button>
                <div className="loginScreen_gradient">
                </div>
            </div>
            <div className="loginScreen_body">
                    <>
                    <h1>Unlimited films,TV programmes and more.</h1>
                    <h2>Watch Anywhere,Cancel Anytime</h2>
                    </>
            </div>
        </div>
    )
}

export default LoginScreen;