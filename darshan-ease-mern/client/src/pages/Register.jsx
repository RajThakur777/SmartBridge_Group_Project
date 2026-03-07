import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await API.post("/auth/register", formData);
      
      alert("Registration successful ✅ Please login.");
      
      navigate("/login");   // 👈 THIS is the important line
      
      } catch (error) {
        console.log(error);
        alert("Registration failed ❌");
      }
    };

  return (
    <div className="container mt-4">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-2"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={handleChange}
        />
        <select
          name="role"
          className="form-control mb-2"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">Normal User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;