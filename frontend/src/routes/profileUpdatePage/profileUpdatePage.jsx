import { useContext,useState } from 'react';
import './profileUpdatePage.scss'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import UploadWidget from '../../components/uploadWidget/uploadWidget';

function ProfileUpdatePage() {
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { currentUser, updateUser } = useContext(AuthContext);
    const [avatar, setAvatar] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { userName, email, password } = Object.fromEntries(formData);

        try {
            const res = await  apiRequest.put(`/users/${currentUser.id}`, { userName, email, password, avatar:avatar[0] });
            updateUser(res.data);
            navigate("/profile");

        }catch (err) {
            setError(err.response.data.message);
        }
    }

    return (
        <div className="profileUpdatePage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor='userName'>Username</label>
                        <input type="text" id='userName' name='userName' defaultValue={currentUser.userName} />
                    </div>
                    <div className="item">
                        <label htmlFor='email'>Email</label>
                        <input type="email" id='email' name='email' defaultValue={currentUser.email} />
                    </div>
                    <div className="item">
                        <label htmlFor='password'>Password</label>
                        <input type="password" id='password' name='password' />
                    </div>
                    <button>Update</button>
                    {error && <span className='error'>error</span>}
                </form>
            </div>
            <div className="sideContainer">
                <img src={avatar[0] || currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
                <UploadWidget
                uwConfig={{
                    cloudName: "dgm2dwuto",
                    uploadPreset: "estate",
                    multiple: false,
                    maxImageFileSize: 2000000,
                    folder: "avatars",
                }}
                setState={setAvatar}
                />
                
            </div>
        </div>
    );
}
export default ProfileUpdatePage;