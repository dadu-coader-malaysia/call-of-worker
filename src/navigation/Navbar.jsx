import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      className="shadow-sm py-2"
      style={{ backgroundColor: "#314b94" }}
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-4"
        >
          Call For Worker
        </Navbar.Brand>

        {/* Mobile Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Menu */}
        <Navbar.Collapse id="navbar-nav">

          <Nav className="ms-auto gap-lg-3 text-center">

            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-info fw-bold"
                  : "text-white"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-info fw-bold"
                  : "text-white"
              }
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "text-info fw-bold"
                  : "text-white"
              }
            >
              Post
            </Nav.Link>

            

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-info fw-bold"
                  : "text-white"
              }
            >
              Contact
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/workers"
              className={({ isActive }) =>
                isActive
                  ? "text-info fw-bold"
                  : "text-white"
              }
            >
              Worker's
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-info fw-bold"
                  : "text-white"
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/newpost"
              className={({ isActive }) =>
                isActive
                  ? "text-info fw-bold"
                  : "text-white"
              }
            >
              New-Post
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-info fw-bold"
                  : "text-white"
              }
            >
              Profile
            </Nav.Link>
            

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}