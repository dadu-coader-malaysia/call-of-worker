
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
    <button
          className="btn btn-primary"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>

        {/* POST JOB */}
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/addprofile")}
        >
          Add You Profile
        </button>
      
    </>
  )
}

export default Profile