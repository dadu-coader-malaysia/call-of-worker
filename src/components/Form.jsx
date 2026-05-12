import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../api/api";

export default function AddPost() {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    type: "worker",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("details", formData.details);
      data.append("type", formData.type);
      data.append("img", image);

      const res = await api.post("/newpost", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Saved:", res.data);

      setFormData({
        name: "",
        details: "",
        type: "worker",
      });

      setImage(null);

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

          <Form
            onSubmit={handleSubmit}
            className="p-3 border rounded shadow-sm"
          >

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

            {/* Image Upload */}
            <Form.Control
              type="file"
              size="sm"
              className="mb-2"
              accept="image/*"
              onChange={handleImage}
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

            {/* Type */}
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

            <Button type="submit" size="sm" className="w-100">
              Submit
            </Button>

          </Form>

        </div>
      </div>
    </div>
  );
}