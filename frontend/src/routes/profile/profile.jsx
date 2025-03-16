import './profile.scss';
import List from '../../components/list/list';
import Chat from '../../components/chat/chat';
import { useNavigate } from 'react-router-dom';
import "../../lib/apiRequest.js";
import apiRequest from '../../lib/apiRequest';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';

function Profile() { 
    const navigate = useNavigate();
    const {updateUser, currentUser} = useContext(AuthContext); 
    const handleLogout = async () => {
        try {
            await apiRequest.post("/auth/logout");
            updateUser(null);
            navigate("/");
        }
        catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="profile">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar : <img src={currentUser.avatar || "noavatar.jpg"} alt="" /></span>
                        <span>User Name : <b>{currentUser.userName}</b></span>
                        <span>E-mail : <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Add New Product</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>  
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    );
}

export default Profile;