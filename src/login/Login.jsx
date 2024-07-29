import React, { useState } from "react";
import logo from '../login/kyvor_logo.png'
import '../login/Login.css'


function Login() {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Analyst");
    const [password,setPassword] = useState ("");

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log('Email', email);
        console.log('Role', role);
        console.log('Password', password);
    }
    return (
        <div className="container">
             <img src={logo} alt="Company Logo" className="logo" /> {/* Add the logo image */}
            <form onSubmit={handleLogin} className="from">
            <h1 className="heading">Login</h1>
            <div className="input-group">
                    <label htmlFor="email" className="label">Email :</label>
                    <input id="email" 
                    type="email" 
                    value={email} 
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="role" className="label">Role :</label>
                    <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="input">
                        <option >Analyst</option>
                        <option >Doctor</option>
                        <option >Patient</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="password" className="label">Password :</label>
                    <input id="password" 
                    type="password" 
                    value={password} 
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    required
                    />
                </div>
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
}

export default Login