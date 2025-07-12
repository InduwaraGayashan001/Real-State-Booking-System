import "./navbar.scss";
import {useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const [open, setOpen] = useState(false)
    const { currentUser } = useContext(AuthContext);
    
    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="./logo.png" alt=""/>
                    <span>EzyEstate</span>
                    
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/agents">Agents</Link>

            </div>
            <div className="right">
                {currentUser ? (<div className="user">
                    <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
                    <span>{currentUser.userName}</span>

                    <Link to="/chat" className="msg"><img src="/message.png" alt="" />
                        <div className="notification">3</div>
                    </Link>
                    
                    <Link to="/profile" className="userProfile">
                        Profile
                    </Link>     
                </div>):
                    (<>
                        <Link to="/login">Sign In</Link>
                        <Link to="/register" className="register">
                            Sign Up
                        </Link>
                    </>)}
                <div className="menuIcon">
                    <img
                        src="/menu.png"
                        alt=""
                        onClick={() =>
                            setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "menu active": "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link> 
                    <Link to="/contact">Contact</Link>
                    <Link to="/agents">Agents</Link>
                    {currentUser ? (
                        <Link to="/profile" className="userProfileMenu">
                            Profile
                        </Link>
                    ) : (
                        <>
                            <Link to="/login">Sign In</Link>
                            <Link to="/register" className="registerMenu">
                                Sign Up
                            </Link>
                        </>
                    )}

                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;  