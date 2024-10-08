




import React, { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
        window.location.href = '/SignUp'; 
    };
    

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/Login', {
        name,
        password,
      });
      alert(response.data.message); // Show success or error message
      if (response.data.success) {
        window.location.href = '/'; // Redirect on success
      }
    } catch (error) {
      alert("Error logging in: " + (error.response?.data?.error || error.message));
    }
  };

  

  return (
    <Container style={{ display: "flex", justifyContent: "center", alignItems: "center",  minHeight: '88vh',  
      minWidth: '100vw' ,backgroundColor:"#1F2833"}}>
        <div
          style={{
            marginTop: "10px",
            width: "450px",
            background: "rgba(237, 231, 231, 0.5)",
            border: "2px solid rgba(20, 19, 19, 0.2)",
            borderRadius: "12px",
            padding: "30px 40px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(9px)",
            color: "#fff"
          }}
        >
          <form onSubmit={handleLogin}>
            <h1 style={{ color: "white", fontSize: "36px", textAlign: "center", marginBottom: "20px" }}>Login</h1>
            <div style={{ position: "relative", width: "100%", height: "50px", margin: "20px 0" }}>
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "40px",
                  fontSize: "16px",
                  color: "#fff",
                  padding: "20px 45px 20px 20px",
                }}
              />
              <i
                className="bx bxs-user"
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "30%",
                  transform: "translate(-50%)",
                  fontSize: "20px",
                  color: "#fff"
                }}
              ></i>
            </div>
            <div style={{ position: "relative", width: "100%", height: "50px", margin: "20px 0" }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "40px",
                  fontSize: "16px",
                  color: "#000",
                  padding: "20px 45px 20px 20px",
                }}
              />
              <i
                className="bx bxs-lock-alt"
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "30%",
                  transform: "translate(-50%)",
                  fontSize: "20px",
                  color: "#fff"
                }}
              ></i>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14.5px", margin: "-15px 0 15px" }}>
              <label style={{ color: "#fff" }}>
                <input type="checkbox" style={{ marginRight: "3px" }} /> Remember Me
              </label>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Forgot Password</a>
            </div>
            <button
              type="submit"
              
              style={{
                width: "100%",
                height: "45px",
                background: "#fff",
                border: "none",
                borderRadius: "40px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                fontSize: "16px",
                color: "#333",
                fontWeight: "600",
              }}
            >
              Login
            </button>
            <div style={{ fontSize: "14.5px", textAlign: "center", margin: "20px 0 15px" }}>
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={handleSignUp} style={{ color: "#fff", textDecoration: "none", fontWeight: "600" }}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </Container>
  );
};

export default Login;
