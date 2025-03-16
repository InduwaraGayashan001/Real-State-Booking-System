import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false)
    const user = true;
    return (
        
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="./logo.png" alt="" s/>
                    <span>EzyEstate</span>
                    
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/agents">Agents</Link>

            </div>
            <div className="right">
                {user ? (<div className="user">
                    <img src= "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>

                    <Link to="/chat" className="msg"><img src="/message.png" alt="" />
                        <div className="notification">3</div>
                    </Link>
                    
                    <Link to="/profile" className="userProfile">
                        Profile
                    </Link>     
                </div>):
                    (<>
                        <Link to="/">Sign In</Link>
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
                    {user ? (
                        <Link to="/profile" className="userProfileMenu">
                            Profile
                        </Link>
                    ) : (
                        <>
                            <Link to="/">Sign In</Link>
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