import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostCard from "../components/PostCard";
import { api } from "../api/api";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/post"); // backend API
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">

      <h3 className="text-center mb-4">All Posts</h3>

      <Row className="g-3">

        {posts.map((post) => (
          <Col key={post._id || post.id} xs={12} md={6} lg={4}>
            <PostCard post={post} />
          </Col>
        ))}

      </Row>

    </div>
  );
}