import HomeCard from "../components/HomeCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center fade-in delay-6">

      <h1 className="mb-4 ">
       🚀 Hire. Work. Earn. All in One Place. Find Skilled Workers Near You
      </h1>

      <p className="lead mb-4">
        🚀 Hire trusted professionals for any job in minutes.
      </p>
      <p className="lead mb-4 bg-danger text-white rounded-4 p-2">
         Just take subscription and get started! get job opportunities & Find Workers !!
      </p>

      <p className="lead mb-4 bg-danger text-white rounded-4 p-2">
         Only user can access all feature 
      </p>
      <p className="lead mb-4 bg-danger text-white rounded-4 p-2">
        None user can only view public content <b>Home, Services, About, Contact</b> 
      </p>

      <div className="d-flex justify-content-center gap-3 fade-in delay-8">

        {/* FIND JOB */}
        <button
          className="btn btn-primary"
          onClick={() => navigate("/post")}
        >
          Find Your Job
        </button>

        {/* POST JOB */}
        <button
          className="btn btn-info"
          onClick={() => navigate("/newpost")}
        >
          Post a Job
        </button>
          {/* Register*/}
        <button
          className="btn btn-primary"
          onClick={() => navigate("/register")}
        >
          Register
        </button>

        <button
          className="btn btn-success"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      </div>

      <HomeCard />

    </div>
  );
};

export default Home;