import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

      const res = await API.post("/auth/login", formData);


      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.name);
      localStorage.setItem("role", res.data.user.role);
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
      alert("Login Successful ");

    } catch (error) {

      alert("Login Failed");

      console.log(error);

    }

  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #f8fafc 60%, #F59E42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: 370, width: '100%', borderRadius: 16, background: 'rgba(255,255,255,0.98)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 12px #F59E42', padding: 8 }}>
          <img src="/logo192.png" alt="DarshanEase Logo" style={{ width: 60, height: 60, borderRadius: '50%' }} />
        </div>
        <h3 className="text-center mb-4 mt-4" style={{ color: '#F59E42', fontWeight: 700 }}>Login to DarshanEase</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
              onChange={handleChange}
              required
              autoFocus
              style={{ borderRadius: 8, border: '1px solid #F59E42' }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
              onChange={handleChange}
              required
              style={{ borderRadius: 8, border: '1px solid #F59E42' }}
            />
          </div>
          <button className="btn w-100" style={{ background: '#F59E42', color: '#fff', fontWeight: 600, fontSize: '1.1rem', borderRadius: 8 }}>
            Login
          </button>
        </form>
        <p className="text-center mt-3 mb-0" style={{ color: '#4B2E83' }}>
          Don't have an account? <Link to="/register" style={{ color: '#F59E42', fontWeight: 500 }}>Register</Link>
        </p>
        <div style={{ position: 'absolute', bottom: -32, left: '50%', transform: 'translateX(-50%)', opacity: 0.12 }}>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&q=80" alt="Temple Accent" style={{ width: 120, height: 60, objectFit: 'cover', borderRadius: 12 }} />
        </div>
      </div>
    </div>
  );
}

export default Login;