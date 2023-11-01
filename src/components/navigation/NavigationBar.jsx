import { Container, Form, Button, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../style/Navbar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";

function NavigationBar() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [ search, setSearch ] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  const handleLogout = () => {
    dispatch(logout(() => {
      // Setelah logout berhasil, akan melakukan refresh halaman
      window.location.reload();
    }));
  };

  return (
    <Navbar expand="lg" className="transparant fixed-top p-2">
      <Container fluid>
        <Navbar.Brand className="text-danger fs-1 Navbar-logo " as={Link} to={"/"}>
          Movielist
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-danger text-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end">
            <div className="ml-auto">
              <Form onSubmit={handleSearch}>
                <input type="search" placeholder="What do you want to watch?" name="query" className="Navbar-search" onChange={(e) => setSearch(e.target.value)} value={search}/>
              </Form>
              <div>
                {isLoggedIn ? (
                  <>
                    <Button
                      variant="danger"
                      className="Navbar-button"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline-danger" className="Navbar-button" as={Link} to={"/login"}>
                      Login
                    </Button>
                    <Button variant="danger" className="Navbar-button" as={Link} to={"/register"}>
                      Register
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
