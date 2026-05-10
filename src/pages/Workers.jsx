import { useEffect, useState } from "react";
import WorkerCard from "../components/WorkerCard";
import { api } from "../api/api";
import Spinner from "react-bootstrap/Spinner";

export default function WorkerList() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const res = await api.get("/workers");
        setWorkers(res.data);
      } catch (err) {
        console.log(err);
        setError("Failed to load workers");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  // 🔄 Loading UI
  if (loading)
    return (
      <div className="text-center mt-5 fade-in delay-12">
        <Spinner animation="border" />
        <p className="mt-2">Loading workers...</p>
      </div>
    );

  // ❌ Error UI
  if (error)
    return (
      <div className="text-center mt-5 text-danger fade-in delay-12">
        {error}
      </div>
    );

  // 📭 Empty state
  if (workers.length === 0)
    return (
      <div className="text-center mt-5 text-muted fade-in delay-12">
        No workers found
      </div>
    );

  return (
    <div className="container mt-3">

      <div className="row g-2">

        {workers.map((worker) => (
          <div
            key={worker.id}
            className="col-6 col-md-4 col-lg-3 col-xl-2"
          >
            <WorkerCard
              worker={worker}
              onHire={(w) => console.log("Hire:", w)}
            />
          </div>
        ))}

      </div>

    </div>
  );
}