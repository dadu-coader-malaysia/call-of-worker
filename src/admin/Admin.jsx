import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Admin() {
  const [users, setUsers] = useState([]);

  // fetch users
  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // async wrapper
    const loadData = async () => {
      await fetchUsers();
    };

    loadData();
  }, []);

  // approve user
  const approveUser = async (id) => {
    try {
      await api.put(`/approve/${id}`);

      // refresh users
      fetchUsers();

      alert("User approved");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {users.map((user) => (
        <div
          key={user._id}
          className="border rounded p-3 mb-3 shadow-sm"
        >
          <h5>{user.name}</h5>

          <p>{user.email}</p>

          <p>
            Status:
            <strong className="ms-2">
              {user.status}
            </strong>
          </p>

          {user.status === "pending" && (
            <button
              className="btn btn-success"
              onClick={() => approveUser(user._id)}
            >
              Approve
            </button>
          )}
        </div>
      ))}
    </div>
  );
}