import { useEffect, useState } from "react";
import API from "../services/api";
import { QRCodeCanvas } from "qrcode.react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const bookingRes = await API.get("/bookings", {
          headers: { Authorization: `Bearer ${token}` }
        });

        const donationRes = await API.get("/donations", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setBookings(bookingRes.data);
        setDonations(donationRes.data);

      } catch (error) {
        console.log(error);
      } finally {
        // loading state removed
      }
    };

    fetchData();
  }, []);



  return (
    <div className="container mt-4">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <div className="alert alert-info">
          No bookings found.
        </div>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking._id}
            className="card mb-4 p-4 shadow-lg border-0"
          >
            <div className="row align-items-center">

              {/* QR Code */}
              <div className="col-md-3 text-center">
                <QRCodeCanvas
                  value={`${window.location.origin}/ticket/${booking._id}`}
                  size={130}
                />
                <p className="mt-2 small text-muted">
                  Scan for verification
                </p>
              </div>

              {/* Ticket Details */}
              <div className="col-md-9">
                <h4 className="mb-3 text-primary">
                  🎫 Darshan Ticket
                </h4>

                <p><strong>Temple:</strong> {booking.temple}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Slot:</strong> {booking.slot}</p>
                <p><strong>Booking ID:</strong> {booking._id}</p>
              </div>

            </div>
          </div>
        ))
      )}

      {/* Donations Section */}
      <h2 className="mt-5 mb-4">My Donations</h2>

      {donations.length === 0 ? (
        <div className="alert alert-info">
          No donations found.
        </div>
      ) : (
        donations.map((donation) => (
          <div key={donation._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5>Amount: ₹{donation.amount}</h5>
              <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default MyBookings;