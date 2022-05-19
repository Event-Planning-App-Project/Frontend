import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Router from "next/router";

function Register() {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    setStatus("loading");

    const registerReq = await fetch("http://54.179.30.163:8050/user", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });

    if (!registerReq.ok) return setStatus("error " + registerReq.status);

    const content = await registerReq.json();

    setStatus("success");

    Router.push("/user/Login");
  };

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
                <div>{status}</div>
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
