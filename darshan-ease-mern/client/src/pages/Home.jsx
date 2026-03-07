import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import tirupatiImg from '../assets/tirupati.jpg';
import kashiImg from '../assets/kashi.jpg';
import goldenTempleImg from '../assets/goldentemple.jpg';
function Home() {
const role = localStorage.getItem("role");

  if (role === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }
  return (
    <div style={{ background: '#f8f9fa' }}>
      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(75,46,131,0.7),rgba(247, 244, 241, 0.7)), url(https://images.unsplash.com/photo-1605640840605-14ac1855827b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-2 fw-bold mb-3" style={{ letterSpacing: '1px' }}>
            Welcome to <span style={{ color: '#F59E42' }}>DarshanEase {role === "admin" && "(Organizer)"}</span> 🛕
          </h1>
          <p className="lead mb-4" style={{ fontSize: '1.35rem', color: '#fff' }}>
            Book darshan slots at India's most sacred temples easily
          </p>
          <Link to="/temples">
            <button className="btn btn-warning btn-lg px-5 shadow">
              Explore Temples
            </button>
          </Link>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="container mt-5 mb-4">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h4 className="mb-2" style={{ color: '#4B2E83' }}>⚡ Fast Booking</h4>
              <p className="text-muted mb-0">
                Reserve your darshan slot instantly without long waiting lines.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h4 className="mb-2" style={{ color: '#F59E42' }}>📅 Flexible Slots</h4>
              <p className="text-muted mb-0">
                Choose convenient timings that suit your schedule.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h4 className="mb-2" style={{ color: '#4B2E83' }}>🔒 Secure Platform</h4>
              <p className="text-muted mb-0">
                Your bookings and data are completely safe and protected.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR TEMPLES */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#4B2E83' }}>
          Popular Temples
        </h2>
        <div className="row g-4">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={tirupatiImg}
                className="img-fluid rounded-top"
                alt="Tirupati Temple"
                style={{ height: "220px", objectFit: "cover", width: "100%" }}
              />
              <div className="card-body p-3">
                <h5 className="text-center mb-0">Tirupati Balaji</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={kashiImg}
                className="img-fluid rounded-top"
                alt="Kashi Vishwanath"
                style={{ height: "220px", objectFit: "cover", width: "100%" }}
              />
              <div className="card-body p-3">
                <h5 className="text-center mb-0">Kashi Vishwanath</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={goldenTempleImg}
                className="img-fluid rounded-top"
                alt="Golden Temple"
                style={{ height: "220px", objectFit: "cover", width: "100%" }}
              />
              <div className="card-body p-3">
                <h5 className="text-center mb-0">Golden Temple</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="container mt-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="bg-white rounded shadow-sm py-4">
              <h2 className="fw-bold mb-1" style={{ color: '#F59E42' }}>50+</h2>
              <p className="text-muted mb-0">Temples Listed</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white rounded shadow-sm py-4">
              <h2 className="fw-bold mb-1" style={{ color: '#4B2E83' }}>10K+</h2>
              <p className="text-muted mb-0">Bookings Completed</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white rounded shadow-sm py-4">
              <h2 className="fw-bold mb-1" style={{ color: '#F59E42' }}>25K+</h2>
              <p className="text-muted mb-0">Devotees Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="container text-center mt-5 mb-5">
        <h2 className="fw-bold" style={{ color: '#4B2E83' }}>
          Start Your Spiritual Journey Today
        </h2>
        <p className="text-muted mt-3" style={{ fontSize: '1.1rem' }}>
          Discover sacred temples and book your darshan slot easily.
        </p>
        <Link to="/temples">
          <button className="btn btn-primary btn-lg mt-3 px-4 shadow">
            View Temples
          </button>
        </Link>
      </div>

      {/* ABOUT & CONTACT SECTION */}
      <div className="container mt-5 mb-4">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h2 className="fw-bold mb-3" style={{ color: '#4B2E83' }}>About DarshanEase</h2>
              <p className="text-muted mb-0" style={{ fontSize: '1.1rem' }}>
                DarshanEase is your one-stop platform for booking darshan slots at India's most revered temples. Our mission is to make spiritual journeys accessible, convenient, and memorable for devotees across the country. With a user-friendly interface, secure booking, and up-to-date information, we help you focus on your devotion while we handle the logistics. Whether you seek peace, blessings, or a new experience, DarshanEase is here to guide your spiritual path.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <h2 className="fw-bold mb-3" style={{ color: '#F59E42' }}>Contact Us</h2>
              <p className="text-muted mb-2" style={{ fontSize: '1.1rem' }}>
                Have questions, feedback, or need support? Reach out to our team:
              </p>
              <ul className="list-unstyled mb-2">
                <li><b>Email:</b> <a href="mailto:support@darshanease.com" style={{ color: '#4B2E83' }}>support@darshanease.com</a></li>
                <li><b>Phone:</b> <a href="tel:+911234567890" style={{ color: '#4B2E83' }}>+91 7599120449</a></li>
              </ul>
              <p className="text-muted">We are here to help you 7 days a week, 9am to 9pm.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-3 mt-4" style={{ color: '#888', fontSize: '1rem' }}>
        &copy; {new Date().getFullYear()} DarshanEase. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;