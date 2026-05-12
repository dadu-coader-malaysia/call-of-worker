import Card2 from "../components/Card2";

const About = () => {
  return (
    <>
      <div className="container mt-4 text-center">

        {/* About Text */}
        <h1 className="fw-bold mb-3">About Us</h1>

        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          Welcome to our company! We are dedicated to providing top-notch
          services and products to our customers. Our team is passionate
          about delivering excellence and ensuring customer satisfaction.
          With years of experience in the industry, we have built a reputation
          for reliability and quality.
        </p>

      </div>

      {/* Trust Section */}
      <div className="container mt-4 text-center">

        <h2 className="fw-bold mb-2">🔐 Why Choose Us</h2>

        <ul className="list-unstyled">
          <li>✔ Verified Workers</li>
          <li>✔ Fast Response</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ Secure Communication</li>
          <li>✔ We check all our workers VERIFYED or not</li>
        </ul>

      </div>

      {/* Tagline Section */}
      <div className="container mt-4 text-center">

        <h2 className="fw-bold mb-2">Brand Taglines</h2>

        <ul className="list-unstyled">
          <li>“Work Made Simple.”</li>
          <li>“Hire Trusted Workers Instantly.”</li>
          <li>“Your Job, Our Responsibility.”</li>
          <li>“Connecting Skills with Needs.”</li>
        </ul>

      </div>

      {/* Card Section */}
      <div className="container mt-5 mb-5">

        <div className="row justify-content-center g-4">

          <div className="col-12 col-md-8 col-lg-9">
            <Card2 />
          </div>

        </div>

      </div>
    </>
  );
};

export default About;