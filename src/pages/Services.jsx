import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
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
  const handleClick = (service) => {
    // go to worker page with service name
    navigate(`/workers?service=${encodeURIComponent(service)}`);
  };

  return (
    <div className="container text-center my-4">

      <h2 className="mb-3 fw-bold">Our Services</h2>

      <p className="lead mb-4">
        🔧 Choose a service and hire instantly
      </p>

      <div className="row g-3 justify-content-center">

        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-4">

            <div className="p-3 border rounded shadow-sm h-100 bg-light">

              <h6 className="mb-3">{service}</h6>

              <button
                className="btn btn-primary btn-sm w-100"
                onClick={() => handleClick(service)}
              >
                View Workers
              </button>

            </div>

          </div>
        ))}

      </div>

      <p className="text-muted mt-4">
        Fast, trusted workers available near you.
      </p>

    </div>
  );
};

export default Services;