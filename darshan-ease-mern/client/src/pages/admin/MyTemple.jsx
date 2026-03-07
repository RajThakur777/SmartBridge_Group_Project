import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

function MyTemple() {

  const [temples, setTemples] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchTemples();
  }, []);

  const fetchTemples = async () => {
    try {
      const res = await API.get("/temples");
      setTemples(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTemple = async () => {
    try {
      await API.post("/temples", {
        name,
        location,
        description,
        image
      });

      setName("");
      setLocation("");
      setDescription("");
      //setImage("");

      fetchTemples();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTemple = async (id) => {
    try {
      await API.delete(`/temples/${id}`);
      fetchTemples();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-3">My Temples</h2>

      {/* Add Temple Form */}
      <div className="card p-4 shadow-sm mb-4">

        <h5>Add New Temple</h5>

        <input
          className="form-control mb-2"
          placeholder="Temple Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
  className="form-control mb-2"
  placeholder="Temple Image URL"
  value={image}
  onChange={(e) => setImage(e.target.value)}
/>

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={addTemple}
        >
          Add Temple
        </button>

      </div>

      {/* Temple Cards */}

      <div className="row">

        {temples.map((t) => (
          <div className="col-md-4 mb-4" key={t._id}>

            <div className="card shadow-sm h-100">

              <img
                src={t.image || "https://via.placeholder.com/400x250"}
                className="card-img-top"
                alt={t.name}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body text-center">

                <h5 className="card-title">{t.name}</h5>

                <p className="text-muted">
                  📍 {t.location}
                </p>

                <p className="small text-muted">
                  {t.description}
                </p>

                <div className="d-flex justify-content-center gap-2 mt-3">

                  <button
                    className="btn btn-warning"
                    onClick={() => navigate(`/admin/edit-temple/${t._id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTemple(t._id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MyTemple;