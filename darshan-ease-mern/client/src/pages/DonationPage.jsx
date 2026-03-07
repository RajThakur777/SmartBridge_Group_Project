import { useState } from "react";
import API from "../services/api";

function DonationPage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem("token");
      
      await API.post(
        "/donations",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      alert("Donation Successful 🙏");
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      {/* Banner Section */}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605640840605-14ac1855827b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Support Temple Donations 🙏</h1>
          <p>Your contribution helps preserve spiritual heritage</p>
        </div>
      </div>

      {/* Donation Card */}
      <div className="container d-flex justify-content-center mt-5">

        <div className="card shadow-lg p-4 text-center" style={{ width: "400px" }}>

          <h3 className="mb-3">Make a Donation</h3>

          <p className="text-muted">
            Help temples maintain facilities and serve devotees.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Enter Amount (₹)</label>

              <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <button className="btn btn-warning w-100">
              Donate Now
            </button>

          </form>

        </div>

      </div>

      {/* Inspirational Section */}
      <div className="container text-center mt-5">

        <h4>“Giving is not just about making a donation.”</h4>
        <p className="text-muted">
          It is about making a difference in preserving sacred places.
        </p>

      </div>

    </div>
  );
}

export default DonationPage;