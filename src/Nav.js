import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import "./Nav.css"



function Nav(){
    const [show,handleShow] = useState(false);
    const history = useHistory();   


    const trasitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",trasitionNavBar);
        return () =>  window.removeEventListener("scroll",trasitionNavBar);
    }, []);


    return(
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img className="nav_logo" 
                onClick={() => history.push("/")}
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="netflix-logo"
                />
                <img
                onClick={() => history.push("/profile")} 
                className="nav_avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                />
            </div>
        </div>
    )

}

export default Nav;