import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useAuth } from "../components/AuthContext";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      login(res.data.user, res.data.token);

      alert("Login successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="p-4 shadow-sm border rounded bg-white">

          <h3 className="text-center mb-4">Login</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              className="mb-3"
              value={form.email}
              onChange={handleChange}
              required
            />

            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              className="mb-3"
              value={form.password}
              onChange={handleChange}
              required
            />

            <Button type="submit" className="w-100">
              Login
            </Button>
          </Form>

        </div>
      </div>
    </div>
  );
}