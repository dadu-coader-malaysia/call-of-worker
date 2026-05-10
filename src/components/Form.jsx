import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../api/api";

export default function AddPost() {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    details: "",
    type: "worker", // as default value
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/newpost", formData);

      console.log("Saved:", res.data);

      setFormData({
        name: "",
        img: "",
        details: "",
        type: "worker",
      });

      alert("Submitted successfully!");
    } catch (err) {
      console.log(err);
      alert("Error while saving");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">

          <Form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm">

            <h5 className="text-center mb-3">Add Post</h5>

            {/* Name */}
            <Form.Control
              size="sm"
              className="mb-2"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Image */}
            <Form.Control
              size="sm"
              className="mb-2"
              placeholder="Image URL"
              name="img"
              value={formData.img}
              onChange={handleChange}
              required
            />

            {/* Details */}
            <Form.Control
              as="textarea"
              rows={3}
              size="sm"
              className="mb-2"
              placeholder="Details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
            />

            {/* TYPE SELECT */}
            <Form.Select
              size="sm"
              className="mb-3"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="worker">Find Worker</option>
              <option value="job">Post Job</option>
            </Form.Select>

            {/* Button */}
            <Button type="submit" size="sm" className="w-100">
              Submit
            </Button>

          </Form>

        </div>
      </div>
    </div>
  );
}