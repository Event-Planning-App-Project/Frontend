import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

function Register() {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  function registerHandler(e) {
    e.preventDefault();

    console.log(fields);
  }

  function fieldsHandler(e) {
    const name = e.target.getAttribute("name");

    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div>
              <div className="text-center py-3">
                <h1>REGISTER</h1>
                <p>Welcome back! Please enter your details</p>
              </div>

              <Form onSubmit={registerHandler.bind(this)} className="mt-20">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    name="username"
                    onChange={fieldsHandler.bind(this)}
                    type="text"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    onChange={fieldsHandler.bind(this)}
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    onChange={fieldsHandler.bind(this)}
                    type="password"
                    placeholder="Enter your password"
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="danger" size="sm" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          <Col className="d-flex justify-content-center" lg={8} md={6} sm={12}>
            <Image
              src="/register.svg"
              alt="Register"
              width={500}
              height={500}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
