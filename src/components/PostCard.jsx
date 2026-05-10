import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PostCard({ post }) {
  return (
    <Card className="shadow-sm border-0 h-100 fade-in delay-12">

      {/* Image */}
      <Card.Img
        src={post.img}
        style={{ height: "180px", objectFit: "cover" }}
      />

      {/* Body */}
      <Card.Body>

        <Card.Title className="fw-bold">
          {post.title}
        </Card.Title>

        <Card.Text className="text-muted">
          {post.text}
        </Card.Text>

        {/* Extra info */}
        {post.type && (
          <small className="text-primary d-block mb-2">
            {post.type === "worker" ? "Find Worker" : "Job Post"}
          </small>
        )}

        <Button variant="primary" size="sm" className="w-100">
          View Details
        </Button>

      </Card.Body>

    </Card>
  );
}