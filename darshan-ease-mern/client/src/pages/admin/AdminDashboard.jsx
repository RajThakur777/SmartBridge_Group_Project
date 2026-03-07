import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function AdminDashboard() {

  const [stats, setStats] = useState({
    temples: 0,
    bookings: 0,
    donations: 0
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard/stats")
    .then((res) => {
      setStats(res.data);
    })
    .catch((err) => {
      console.error("Error fetching dashboard stats:", err);
    });
  }, []);

  const data = {
  labels: ["Temples", "Bookings", "Donations"],
  datasets: [
    {
      label: "Total",
      data: [
        stats.temples,
        stats.bookings,
        stats.donations
      ],
      backgroundColor: ["#17a2b8", "#28a745", "#ffc107"]
    }
  ]
};

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Dashboard</h2>

      {/* Stats Cards */}
      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Temples</h5>
              <h3>{stats.temples}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow bg-warning">
            <div className="card-body">
              <h5>Donations</h5>
              <h3>{stats.donations}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow bg-success text-white">
            <div className="card-body">
              <h5>Total Bookings</h5>
              <h3>{stats.bookings}</h3>
            </div>
          </div>
        </div>

      </div>

      {/* Graph */}
      <div
  className="card p-3 shadow"
  style={{
    maxWidth: "650px",
    height: "300px",
    margin: "20px auto"
  }}
>
  <Bar
  data={data}
  options={{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top"
      }
    }
  }}
/>
</div>

    </div>
  );
}

export default AdminDashboard;

// import { useEffect, useState } from "react";
// import API from "../../services/api";

// function AdminDashboard() {
//   const [users, setUsers] = useState([]);
//   const [temples, setTemples] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [newTemple, setNewTemple] = useState({ name: "", location: "", description: "" });
//   const [newTempleImage, setNewTempleImage] = useState(null);
//   const [editTemple, setEditTemple] = useState(null);
//   const [editTempleImage, setEditTempleImage] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       const usersRes = await API.get("/admin/users");
//       const templesRes = await API.get("/admin/temples");
//       setUsers(usersRes.data);
//       setTemples(templesRes.data);
//       setLoading(false);
//     }
//     fetchData();
//   }, []);

//   // Delete temple
//   const handleDeleteTemple = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this temple?")) return;
//     await API.delete(`/admin/temples/${id}`);
//     setTemples(temples.filter((t) => t._id !== id));
//   };

//   // Add new temple
//   const handleAddTemple = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', newTemple.name);
//     formData.append('location', newTemple.location);
//     formData.append('description', newTemple.description);
//     if (newTempleImage) formData.append('image', newTempleImage);
//     const res = await API.post("/admin/temples", formData, { headers: { 'Content-Type': 'multipart/form-data' } });
//     setTemples([...temples, res.data]);
//     setNewTemple({ name: "", location: "", description: "" });
//     setNewTempleImage(null);
//   };

//   // Edit temple
//   const handleEditTemple = (temple) => {
//     setEditTemple({ ...temple });
//   };
//   const handleEditTempleChange = (e) => {
//     setEditTemple({ ...editTemple, [e.target.name]: e.target.value });
//   };
//   const handleUpdateTemple = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', editTemple.name);
//     formData.append('location', editTemple.location);
//     formData.append('description', editTemple.description);
//     if (editTempleImage) formData.append('image', editTempleImage);
//     const res = await API.put(`/admin/temples/${editTemple._id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
//     setTemples(temples.map((t) => (t._id === editTemple._id ? res.data : t)));
//     setEditTemple(null);
//     setEditTempleImage(null);
//   };


//   if (loading) return <div className="container mt-5">Loading...</div>;

//   return (
//     <div className="container mt-5">
//       <div className="bg-white rounded shadow p-4 mb-4" style={{ borderLeft: '8px solid #4B2E83' }}>
//         <h2 className="mb-1" style={{ color: '#4B2E83', fontWeight: 700, letterSpacing: 1 }}>Admin Dashboard <span style={{ fontSize: 28 }}>🛕</span></h2>
//         <p className="text-muted mb-0">Manage users and temples with ease.</p>
//       </div>

//       <div className="row g-4 mb-4">
//         <div className="col-md-6">
//           <div className="card h-100 shadow-sm border-0">
//             <div className="card-body">
//               <h4 className="card-title mb-3" style={{ color: '#F59E42' }}>Users <span className="badge bg-secondary">{users.length}</span> <span style={{ fontSize: 22 }}>👤</span></h4>
//               <ul className="list-group list-group-flush">
//                 {users.map((u) => (
//                   <li key={u._id} className="list-group-item d-flex justify-content-between align-items-center">
//                     <span><b>{u.name}</b></span>
//                     <span className="text-muted" style={{ fontSize: 13 }}>{u.email}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="card h-100 shadow-sm border-0">
//             <div className="card-body">
//               <h4 className="card-title mb-3" style={{ color: '#4B2E83' }}>Temples <span className="badge bg-warning text-dark">{temples.length}</span> <span style={{ fontSize: 22 }}>🏯</span></h4>
//               <ul className="list-group list-group-flush mb-3">
//                 {temples.map((t) => (
//                   <li key={t._id} className="list-group-item d-flex justify-content-between align-items-center">
//                     <span className="d-flex align-items-center">
//                       {t.image && <img src={t.image} alt={t.name} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8, marginRight: 12, border: '1px solid #eee' }} />}
//                       <span>
//                         <b>{t.name}</b> <span className="text-muted">({t.location})</span>
//                       </span>
//                     </span>
//                     <span>
//                       <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditTemple(t)} title="Edit"><i className="bi bi-pencil"></i> Edit</button>
//                       <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteTemple(t._id)} title="Delete"><i className="bi bi-trash"></i> Delete</button>
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//               {/* Add Temple Form */}
//               <div className="card p-3 bg-light border-0">
//                 <h5 className="mb-3" style={{ color: '#4B2E83' }}>Add New Temple</h5>
//                 <form onSubmit={handleAddTemple} className="row g-2 align-items-end" encType="multipart/form-data">
//                   <div className="col-md-3">
//                     <input type="text" name="name" className="form-control" placeholder="Temple Name" value={newTemple.name} onChange={e => setNewTemple({ ...newTemple, name: e.target.value })} required />
//                   </div>
//                   <div className="col-md-3">
//                     <input type="text" name="location" className="form-control" placeholder="Location" value={newTemple.location} onChange={e => setNewTemple({ ...newTemple, location: e.target.value })} required />
//                   </div>
//                   <div className="col-md-4">
//                     <input type="text" name="description" className="form-control" placeholder="Description" value={newTemple.description} onChange={e => setNewTemple({ ...newTemple, description: e.target.value })} />
//                   </div>
//                   <div className="col-md-2">
//                     <input type="file" accept="image/*" className="form-control" onChange={e => setNewTempleImage(e.target.files[0])} />
//                   </div>
//                   <div className="col-12 mt-2">
//                     <button className="btn btn-success w-100">Add Temple</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Temple Modal */}
//       {editTemple && (
//         <div className="modal show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.3)' }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header bg-warning bg-opacity-25">
//                 <h5 className="modal-title" style={{ color: '#4B2E83' }}>Edit Temple</h5>
//                 <button type="button" className="btn-close" onClick={() => setEditTemple(null)}></button>
//               </div>
//               <form onSubmit={handleUpdateTemple}>
//                 <div className="modal-body">
//                   <input type="text" name="name" className="form-control mb-2" placeholder="Temple Name" value={editTemple.name} onChange={handleEditTempleChange} required />
//                   <input type="text" name="location" className="form-control mb-2" placeholder="Location" value={editTemple.location} onChange={handleEditTempleChange} required />
//                   <input type="text" name="description" className="form-control mb-2" placeholder="Description" value={editTemple.description} onChange={handleEditTempleChange} />
//                   <input type="file" accept="image/*" className="form-control mb-2" onChange={e => setEditTempleImage(e.target.files[0])} />
//                   {editTemple.image && (
//                     <img src={editTemple.image} alt="Current" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, border: '1px solid #eee' }} className="mb-2" />
//                   )}
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary" onClick={() => setEditTemple(null)}>Cancel</button>
//                   <button type="submit" className="btn btn-primary">Save Changes</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;
