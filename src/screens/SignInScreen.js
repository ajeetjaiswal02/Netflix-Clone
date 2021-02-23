import React from "react";
import "./SignInScreen.css";

function SignInScreen(){
    return(
        <div className="signupScreen">
            <form>
                <h1>Sign Up</h1>
                <input
                  type="email" 
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  required 
                /> 
                <button type="submit">Sign In
                </button>
            </form>
        </div>
    )
}

export default SignInScreen;