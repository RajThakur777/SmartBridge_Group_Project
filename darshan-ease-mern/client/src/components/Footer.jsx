function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">

      <div className="container py-4">

        <div className="row">

          {/* About Section */}
          <div className="col-md-4">
            <h5>DarshanEase</h5>
            <p className="text-muted">
              Book temple darshan slots easily and peacefully. 
              Connecting devotees with sacred temples across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <a href="/" className="text-decoration-none text-light">
                  Home
                </a>
              </li>

              <li>
                <a href="/temples" className="text-decoration-none text-light">
                  Temples
                </a>
              </li>

              <li>
                <a href="/donate" className="text-decoration-none text-light">
                  Donate
                </a>
              </li>

              <li>
                <a href="/my-bookings" className="text-decoration-none text-light">
                  My Bookings
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5>Contact</h5>

            <p className="text-muted">
              📍 India
            </p>

            <p className="text-muted">
              📧 support@darshanease.com
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-2">

        <p className="mb-0 text-muted">
          © 2026 DarshanEase | Temple Booking Platform
        </p>

      </div>

    </footer>
  );
}

export default Footer;