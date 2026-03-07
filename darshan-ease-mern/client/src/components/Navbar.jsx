
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";


function Navbar() {
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const profileRef = useRef();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setShowDropdown(false);
    alert("Logged out successfully");
    navigate("/login");
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DarshanEase {role === "admin" && "(Organizer)"}
        </Link>
        <div className="d-flex align-items-center ms-auto">
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>
          <Link className="btn btn-outline-light me-2" to="/temples">
            Temples
          </Link>
          <Link className="btn btn-outline-light me-2" to="/donate">
            Donate
          </Link>
          <Link className="btn btn-outline-light me-2" to="/account">
 
            Account
          </Link>
          {!username && (
            <Link className="btn btn-outline-light me-2" to="/login">
              Login
            </Link>
          )}
          {!username && (
            <Link className="btn btn-outline-light" to="/register">
              Register
            </Link>
          )}
          {username && (
            <div className="dropdown" ref={profileRef}>
              <button
                className="btn btn-outline-warning fw-bold ms-2 d-flex align-items-center"
                style={{ minWidth: 100 }}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <span className="me-2">👤</span> {username}
              </button>
              {showDropdown && (
                <div
                  className="dropdown-menu show mt-2"
                  style={{ right: 0, left: "auto", minWidth: 150 }}
                >
                  <button
                    className="dropdown-item text-danger fw-bold"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;