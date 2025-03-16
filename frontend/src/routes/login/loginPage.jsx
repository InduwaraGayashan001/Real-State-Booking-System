import "./loginPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        const formData = new FormData(e.target);
        const userName = formData.get("userName");
        const password = formData.get("password");
        
        try {
            const response = await axios.post("http://localhost:8800/api/auth/login", {
                userName, password
            });
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/");
        }
        catch (err) {
            setError(err.response.data.message);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="loginPage">
            <div className="formContainer">
                <form onSubmit={handleSubmit} >
                    <h1>Welcome back</h1>
                    <input name="userName" required minLength={3} maxLength={20} type="text" placeholder="Username" />
                    <input name="password" required minLength={8} type="password" placeholder="Password" />
                    <button disabled={isLoading}>Login</button>
                    {error && <span>{error}</span>}
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default LoginPage;