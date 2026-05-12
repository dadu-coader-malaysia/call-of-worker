import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { api } from "../api/api";

export default function SubscriptionActivation() {
  const [form, setForm] = useState({
    plan: "basic",
    trxId: "",
    phone: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/subscription", form);

      console.log(res.data);

      setSuccess("Subscription activated successfully!");

      setForm({
        plan: "basic",
        trxId: "",
        phone: "",
      });
    } catch (err) {
      console.log(err);
      alert("Activation failed");
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">

      <div className="col-12 col-md-6 col-lg-5">

        <Card className="shadow-sm border-0 rounded-4">

          <Card.Body className="p-4">

            <h3 className="text-center mb-4">
              Subscription Activation
            </h3>

            {success && (
              <Alert variant="success">
                {success}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>

              {/* Plan */}
              <Form.Group className="mb-3">

                <Form.Label>
                  Select Plan
                </Form.Label>

                <Form.Select
                  name="plan"
                  value={form.plan}
                  onChange={handleChange}
                >
                  <option value="basic">
                    Basic Plan
                  </option>

                  <option value="premium">
                    Premium Plan
                  </option>

                  <option value="vip">
                    VIP Plan
                  </option>
                </Form.Select>

              </Form.Group>

              {/* WhatsApp */}
              <Form.Group className="mb-3">

                <Form.Label>
                  WhatsApp Number
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter WhatsApp Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />

              </Form.Group>

              {/* Transaction ID */}
              <Form.Group className="mb-4">

                <Form.Label>
                  Payment Transaction ID
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter Transaction ID"
                  name="trxId"
                  value={form.trxId}
                  onChange={handleChange}
                  required
                />

              </Form.Group>

              {/* Submit */}
              <Button
                type="submit"
                className="w-100"
              >
                Activate Subscription
              </Button>

            </Form>

          </Card.Body>

        </Card>

      </div>

    </div>
  );
}