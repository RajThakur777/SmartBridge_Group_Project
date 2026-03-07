import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function TicketPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await API.get(`/bookings/${id}`);
        setTicket(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTicket();
  }, [id]);

  if (!ticket) return <h3 className="text-center mt-5">Loading Ticket...</h3>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">🎫 Darshan Ticket</h2>

        <p><strong>Name:</strong> {ticket.user.name}</p>
        <p><strong>Email:</strong> {ticket.user.email}</p>
        <p><strong>Temple:</strong> {ticket.temple}</p>
        <p><strong>Date:</strong> {ticket.date}</p>
        <p><strong>Slot:</strong> {ticket.slot}</p>

        <div className="alert alert-success mt-4">
          ✅ Valid Ticket
        </div>
      </div>
    </div>
  );
}

export default TicketPage;