import "./registerPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../lib/apiRequest.js";
import apiRequest from "../../lib/apiRequest";

function RegisterPage() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        const formData = new FormData(e.target);
        const userName = formData.get("userName");
        const email = formData.get("email");
        const password = formData.get("password");
        
        try {
            const response = await apiRequest.post("/auth/register", {
                userName, email, password
            });
            navigate("/login");
        }
        catch (err) {
            setError(err.response.data.message);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="registerPage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <input name = "userName" required minLength={3} maxLength={20} type="text" placeholder="Username" />
                    <input name="email" required type="text" placeholder="Email" />
                    <input name="password" required minLength={8} type="password" placeholder="Password" />
                    <button disabled={isLoading}>Register</button>
                    {error && <span>{error}</span>}
                    <Link to="/login">Already have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default RegisterPage;