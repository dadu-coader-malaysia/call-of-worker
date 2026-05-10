import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function AddProfile() {
  const navigate = useNavigate();

  const skillOptions = [
    "Electrician",
  "Plumber",
  "IT Support",
  "Construction Worker",
  "Cleaner",
  "Painter",
  "AC Repair Technician",
  "Mover",
  "Car Mechanic",
  "Gardener",
  "Delivery Rider",
  "Security Guard",
  "Chef",
  "Tailor",
  "Driver",
  "Welder",
  "Carpenter",
  "Tile Worker",
  "Roof Technician",
  "CCTV Installer",
  "Network Technician",
  "Mobile Repair Technician",
  "Laptop Repair Technician",
  "Photographer",
  "Videographer",
  "Graphic Designer",
  "Web Developer",
  "App Developer",
  "Babysitter",
  "House Maid",
  "Laundry Worker",
  "Cook Assistant",
  "Waiter",
  "Barber",
  "Hair Stylist",
  "Makeup Artist",
  "Fitness Trainer",
  "Tutor",
  "Translator",
  "Farm Worker",
  ];

  const [showSkills, setShowSkills] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    role: "worker",
    img: "",
    bio: "",
    skills: [],
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleSkill = (skill) => {
    if (form.skills.includes(skill)) {
      setForm({
        ...form,
        skills: form.skills.filter((s) => s !== skill),
      });
    } else {
      setForm({
        ...form,
        skills: [...form.skills, skill],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/profile", form);

      alert("Profile saved successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Error saving profile");
    }
  };

  return (

    <>
    <div className="container mt-4 d-flex justify-content-center">

      <div className="col-12 col-md-6 col-lg-5">

        <div className="p-4 border rounded shadow-sm bg-white">

          <h3 className="text-center mb-3">Create Profile</h3>

          <Form onSubmit={handleSubmit}>

            {/* Name */}
            <Form.Control
              className="mb-2"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* Phone */}
            <Form.Control
              className="mb-2"
              placeholder="WhatsApp Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />

            {/* Role */}
            <Form.Select
              className="mb-2"
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="worker">Worker</option>
              <option value="job">Job Poster</option>
            </Form.Select>

            {/* Image */}
            <Form.Control
              className="mb-2"
              placeholder="Profile Image URL"
              name="img"
              value={form.img}
              onChange={handleChange}
            />

            {/* Bio */}
            <Form.Control
              as="textarea"
              rows={3}
              className="mb-3"
              placeholder="Short Bio"
              name="bio"
              value={form.bio}
              onChange={handleChange}
            />

            {/* TOGGLE BUTTON */}
            <Button
              type="button"
              variant="dark"
              className="w-100 mb-3"
              onClick={() => setShowSkills(!showSkills)}
            >
              {showSkills ? "Hide Skills" : "Show Skills"}
            </Button>

            {/* SKILLS SECTION */}
            {showSkills && (
              <div className="mb-3">

                <label className="mb-2 fw-bold">Select Skills</label>

                <div className="d-flex flex-wrap gap-2">

                  {skillOptions.map((skill, index) => (
                    <Button
                      key={index}
                      type="button"
                      size="sm"
                      variant={
                        form.skills.includes(skill)
                          ? "primary"
                          : "outline-primary"
                      }
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                    </Button>
                  ))}

                </div>

              </div>
            )}

            {/* Submit */}
            <Button type="submit" className="w-100">
              Save Profile
            </Button>

          </Form>

        </div>

      </div>

    </div>

    <button className="btn btn-secondary p-2 m-4" onClick={() => navigate("/profile")}>
      Back
    </button>
    </>
  );
}