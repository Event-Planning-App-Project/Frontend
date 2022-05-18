import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";

function Login() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div>
              <div className="text-center py-3">
                <h1>LOGIN</h1>
                <p>Welcome back! Please enter your details</p>
              </div>

              <Form className="mt-20">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoComplete="of"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    autoComplete="of"
                    type="password"
                    placeholder="Enter your password"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="danger" size="sm">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          <Col className="d-flex justify-content-center" lg={8} md={6} sm={12}>
            <Image src="/login.svg" alt="Login" width={500} height={500} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;