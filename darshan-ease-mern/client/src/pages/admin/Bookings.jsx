import { useEffect, useState } from "react";
import axios from "axios";

function Bookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bookings", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      setBookings(res.data.reverse());
    })
    .catch(err => console.error(err));
  }, []);

  //const totalTickets = bookings.reduce((sum, b) => sum + (b.tickets || 0), 0);

  return (
  <div className="container mt-4">
    <h2>Temple Bookings</h2>

    <h4>Total Bookings: {bookings.length}</h4>

    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th>User</th>
          <th>Temple</th>
          <th>Slot</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
  {bookings.map((booking) => (
    <tr key={booking._id}>
      <td>{booking.user?.name || booking.user}</td>
      <td>{booking.temple}</td>
      <td>{booking.slot}</td>
      <td>{new Date(booking.date).toLocaleDateString()}</td>
    </tr>
  ))}
</tbody>
    </table>

  </div>
);
}

export default Bookings;