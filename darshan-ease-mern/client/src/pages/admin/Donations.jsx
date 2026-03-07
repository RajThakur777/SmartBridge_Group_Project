import { useEffect, useState } from "react";
import axios from "axios";

function Donations() {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/donations", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
})
      .then(res => {
        setDonations(res.data);
      })
      .catch(err => console.error("Error fetching donations:", err));
  }, []);

  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <div className="container mt-4">

      <h2>Donations</h2>
      
<h4>Total Donations: ₹{totalDonations}</h4>

      {donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td>{donation.user.name}</td>
                <td>₹{donation.amount}</td>
                <td>{new Date(donation.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default Donations;