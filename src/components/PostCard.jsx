import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function PostCard({ post }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card className="shadow-sm border-0 h-100 fade-in delay-12">

        {/* IMAGE */}
        <Card.Img
          src={`http://localhost:3000/uploads/${post.img}`}
          style={{ height: "180px", objectFit: "cover" }}
        />

        <Card.Body>

          {/* NAME */}
          <Card.Title className="fw-bold">
            {post.name}
          </Card.Title>

          <Card.Title className="fw-small text-muted">
            <h5 className="mt-3">{'Posted At: ' + new Date(post.createdAt).toLocaleDateString()}</h5>
          </Card.Title>
          

          {/* SHORT DETAILS */}
          <Card.Text className="text-muted">
            {post.details?.slice(0, 60)}...
          </Card.Text>

          {/* TYPE */}
          {post.type && (
            <small className="text-primary d-block mb-2">
              {post.type === "worker" ? "Find Worker" : "Job Post"}
            </small>
          )}

          <Button
            variant="primary"
            size="sm"
            className="w-100"
            onClick={handleShow}
          >
            View Details
          </Button>

        </Card.Body>

      </Card>

      {/* MODAL */}
      <Modal show={show} onHide={handleClose} centered>

        <Modal.Header closeButton>
          <Modal.Title>{post.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">

          <img
            src={`http://localhost:3000/uploads/${post.img}`}
            alt=""
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <h6 className="mt-3">{post.name}</h6>
          <h7 className="mt-3">{'Posted At: ' + new Date(post.createdAt).toLocaleDateString()}</h7>


          <p className="text-muted">{post.details}</p>

          <p><b>Number:</b> {post.number}</p>

          {post.type && (
            <p>
              <b>Type:</b>{" "}
              {post.type === "worker" ? "Find Worker" : "Job Post"}
            </p>
          )}

        </Modal.Body>

      </Modal>
    </>
  );
}