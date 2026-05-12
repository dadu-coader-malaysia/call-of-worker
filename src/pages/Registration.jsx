import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Image from "react-bootstrap/Image";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  // 🔥 Show / Hide skills
  const [showSkills, setShowSkills] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "worker",
    img: null,
    bio: "",
    transactionImg: null,
    skills: [],
  });

  // image preview
  const [profilePreview, setProfilePreview] = useState("");
  const [transactionPreview, setTransactionPreview] = useState("");

  // skills list
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

  // input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // profile image
    if (name === "img") {
      setForm({
        ...form,
        img: files[0],
      });

      setProfilePreview(URL.createObjectURL(files[0]));
      return;
    }

    // transaction image
    if (name === "transactionImg") {
      setForm({
        ...form,
        transactionImg: files[0],
      });

      setTransactionPreview(URL.createObjectURL(files[0]));
      return;
    }

    // normal text
    setForm({
      ...form,
      [name]: value,
    });
  };

  // add/remove skills
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

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("phone", form.phone);
      formData.append("role", form.role);
      formData.append("bio", form.bio);

      // images
      formData.append("img", form.img);
      formData.append("transactionImg", form.transactionImg);

      // skills
      formData.append("skills", JSON.stringify(form.skills));

      const res = await api.post("/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data);

      alert("Registration successful");

      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center py-4"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-12 col-md-8 col-lg-5">

        <div className="p-4 shadow-sm border rounded bg-white">

          <h3 className="text-center mb-4">
            Worker Registration
          </h3>

          <Form onSubmit={handleSubmit}>

            {/* Name */}
            <Form.Control
              className="mb-3"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <Form.Control
              type="email"
              className="mb-3"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* Password */}
            <Form.Control
              type="password"
              className="mb-3"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {/* Phone */}
            <Form.Control
              className="mb-3"
              placeholder="WhatsApp Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />

            {/* Profile Image */}
            <Form.Group className="mb-3">

              <Form.Label>
                Upload Profile Image
              </Form.Label>

              <Form.Control
                type="file"
                accept="image/*"
                name="img"
                onChange={handleChange}
              />

              {profilePreview && (
                <Image
                  src={profilePreview}
                  rounded
                  fluid
                  className="mt-2"
                  style={{
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              )}

            </Form.Group>

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

            {/* Transaction Screenshot */}
            <Form.Group className="mb-3">

              <Form.Label>
                Upload Payment Screenshot
              </Form.Label>

              <Form.Control
                type="file"
                accept="image/*"
                name="transactionImg"
                onChange={handleChange}
              />

              {transactionPreview && (
                <Image
                  src={transactionPreview}
                  rounded
                  fluid
                  className="mt-2"
                  style={{
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              )}

            </Form.Group>

            {/* Toggle Skills */}
            <Button
              type="button"
              variant="dark"
              className="w-100 mb-3"
              onClick={() => setShowSkills(!showSkills)}
            >
              {showSkills ? "Hide Skills" : "Select Skills"}
            </Button>

            {/* Skills Section */}
            <Collapse in={showSkills}>
              <div>

                <div className="d-flex flex-wrap gap-2 mb-3">

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
            </Collapse>

            {/* Selected Skills */}
            <div className="mb-3">
              {form.skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge bg-primary me-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Submit */}
            <Button type="submit" className="w-100">
              Register
            </Button>

          </Form>

        </div>

      </div>
    </div>
  );
}