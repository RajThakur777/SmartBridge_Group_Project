import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function TempleDetails() {
  const { id } = useParams();

  const slots = [
    "08:00 AM",
    "10:00 AM",
    "12:00 PM",
    "02:00 PM",
    "04:00 PM"
  ];

  return (
    <div className="container">
      <h2>Temple Details</h2>
      <p>Temple ID: {id}</p>

      <h3>Available Darshan Slots</h3>

      {slots.map((slot, index) => (
        <Link key={index} to="/booking">
          <button style={{ margin: "5px" }}>{slot}</button>
        </Link>
      ))}
    </div>
  );
}

export default TempleDetails;