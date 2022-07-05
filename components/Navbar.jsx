import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function NavbarComponent() {
  return (
    <>
      <Navbar className="px-5" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <span>
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </span>
          </Navbar.Brand>
          <Form className={styles.search}>
            <FormControl
              type="search"
              placeholder="Search Event"
              className="justify-content-start"
              aria-label="Search"
            />
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="ms-2 justify-content-end"
            id="navbarScroll"
          >
            <Nav>
              <Nav.Link href="/user/Login">Login</Nav.Link>
              <Nav.Link href="/user/Register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
