import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TempleCard({ temple }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleBooking = () => {
    navigate("/booking", {
      state: { temple: temple.name }
    });
  };

  const getGoogleMapsUrl = (location, name) => {
    const destination = encodeURIComponent(`${name}, ${location}`);
    return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  };

  return (
    <>
      <div
        className="card temple-card p-3 mb-4 shadow-sm text-center"
        style={{
          minHeight: 420,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <img
          src={temple.image}//{`http://localhost:5000${temple.image}`}
          alt={temple.name}
          className="temple-img mb-3"
          style={{ width: 320, height: 220, objectFit: "cover", borderRadius: 12 }}
        />

        <h5 className="fw-bold mb-1" style={{ color: "#222" }}>
          {temple.name}
        </h5>

        <div className="mb-2 text-muted">📍 {temple.location}</div>

        <div className="mb-2">
          <b>Open:</b> {temple.openTime || "6:00 AM"} &nbsp;
          <b>Close:</b> {temple.closeTime || "8:00 PM"}
        </div>

        <div className="mb-2">
          <b>Normal Darshan:</b>{" "}
          {temple.normalCost === 0 || temple.normalCost === undefined
            ? "Free"
            : `₹${temple.normalCost}`}
        </div>

        <div className="mb-2">
          <b>VIP Darshan:</b>{" "}
          {temple.vipCost === 0 || temple.vipCost === undefined
            ? "Free"
            : `₹${temple.vipCost}`}
        </div>

        <div className="d-flex justify-content-center gap-2 mt-2">
          <button className="btn btn-warning" onClick={handleBooking}>
            Book Darshan
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setShowModal(true)}
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.4)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">{temple.name} - Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <img
                  src={`http://localhost:5000${temple.image}`}
                  alt={temple.name}
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    marginBottom: 16
                  }}
                />

                <p><b>Location:</b> {temple.location}</p>
                <p><b>Open Time:</b> {temple.openTime || "6:00 AM"}</p>
                <p><b>Close Time:</b> {temple.closeTime || "8:00 PM"}</p>

                <p>
                  <b>Normal Darshan:</b>{" "}
                  {temple.normalCost === 0 || temple.normalCost === undefined
                    ? "Free"
                    : `₹${temple.normalCost}`}
                </p>

                <p>
                  <b>VIP Darshan:</b>{" "}
                  {temple.vipCost === 0 || temple.vipCost === undefined
                    ? "Free"
                    : `₹${temple.vipCost}`}
                </p>

                <p><b>Description:</b> {getTempleDescription(temple.name)}</p>

                <button
                  className="btn btn-outline-success mt-2"
                  onClick={() =>
                    window.open(getGoogleMapsUrl(temple.location, temple.name), "_blank")
                  }
                >
                  View Location & Directions
                </button>

                <FuelCostCalculator />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

function getTempleDescription(name) {
  switch (name) {
    case "Tirupati Balaji":
      return `The Sri Venkateswara Swami Temple, also known as Tirumala Temple or Tirupati Balaji, is a Hindu temple in Tirumala, Andhra Pradesh. Dedicated to Lord Venkateswara (a form of Vishnu), it is one of the world's richest temples and a major pilgrimage site. The temple is famous for its Dravidian architecture, daily rituals, and the annual Brahmotsavam festival. Free Sarva Darshan is available, with special paid darshan options for quicker access. The temple attracts millions of devotees every year, and the experience of standing in the sanctum is considered highly auspicious.`;
    case "Kashi Vishwanath":
      return `Kashi Vishwanath Temple, located in Varanasi, Uttar Pradesh, is one of the twelve Jyotirlingas dedicated to Lord Shiva. The temple stands on the banks of the Ganges and is a major center of Hindu faith. It has a rich history of destruction and reconstruction, with the current structure built in 1780 by Ahilyabai Holkar. Pilgrims believe a visit here leads to moksha (liberation). The temple is surrounded by a bustling corridor and is a must-visit for spiritual seekers.`;
    case "Vaishno Devi":
      return `Vaishno Devi Temple, near Katra in Jammu & Kashmir, is a sacred cave temple dedicated to Goddess Vaishno Devi, a manifestation of the Mother Goddess. Pilgrims trek to the shrine in the Trikuta Mountains to seek blessings. The temple is one of India's most visited pilgrimage sites, especially during Navaratri. The journey to the cave is considered spiritually uplifting, and the temple is open to all devotees year-round.`;
    case "Somnath Temple":
      return `Somnath Temple, in Gujarat, is the first of the twelve Jyotirlinga shrines of Shiva. It has been destroyed and rebuilt several times in history. The current temple, built in the Chalukya style, stands as a symbol of resilience and faith. The temple is located on the Arabian Sea coast and is a major pilgrimage and tourist destination.`;
    case "Golden Temple":
      return `The Golden Temple (Harmandir Sahib) in Amritsar, Punjab, is the holiest shrine of Sikhism. Known for its gold-plated sanctum and surrounding Amrit Sarovar, it welcomes people of all faiths. The temple complex offers free meals (langar) to thousands daily. The spiritual ambiance and the beauty of the temple make it a unique experience for visitors.`;
    case "Jagannath Temple":
      return `Jagannath Temple, in Puri, Odisha, is dedicated to Lord Jagannath (a form of Krishna). It is famous for the annual Rath Yatra festival, where the deities are taken out in grand chariots. The temple is a major pilgrimage site and part of the Char Dham. The rituals and traditions of the temple are unique and attract devotees from all over the world.`;
    case "Kedarnath Temple":
      return `Kedarnath Temple, in Uttarakhand, is one of the holiest Shiva temples and part of the Char Dham Yatra. Located in the Himalayas, it is accessible by a trek or helicopter. The temple is open only during summer months due to extreme weather. The natural beauty and spiritual energy of the place make it a revered destination.`;
    case "Badrinath Temple":
      return `Badrinath Temple, in Uttarakhand, is dedicated to Lord Vishnu and is part of the Char Dham and Chota Char Dham pilgrimages. The temple is located between the Nar and Narayana mountain ranges. The temple is open for six months a year and is visited by thousands of devotees seeking blessings and spiritual solace.`;
    case "Dwarkadhish Temple":
      return `Dwarkadhish Temple, in Gujarat, is dedicated to Lord Krishna. It is one of the Char Dham pilgrimage sites and is known for its grand architecture and religious significance. The temple is located on the banks of the Gomti river and is a major center of Krishna worship in India.`;
    default:
      return "A famous temple in India. For more details, visit the official site or Wikipedia.";
  }
}

function FuelCostCalculator() {
  const [distance, setDistance] = useState(0);
  const mileage = 15;
  const petrolRate = 100;

  const fuel = distance / mileage;
  const cost = (fuel * petrolRate).toFixed(0);

  return (
    <div className="mt-3 p-2 border rounded bg-light">
      <b>Estimate Fuel Cost</b>

      <input
        type="number"
        placeholder="Distance (km)"
        className="form-control mt-2"
        onChange={(e) => setDistance(e.target.value)}
      />

      {distance > 0 && (
        <p className="mt-2">
          Estimated Fuel Cost: <b>₹{cost}</b>
        </p>
      )}
    </div>
  );
}

export default TempleCard;