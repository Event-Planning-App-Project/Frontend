import { Card, Form, Button } from "react-bootstrap";
import Image from "next/image";

function DetailEvent() {
  return (
    <div className="d-flex justify-content-center px-5 py-3">
      <div className="me-3">
        <Card>
          <Card.Img variant="top" />
          <Image
            src="/event-cover.svg"
            alt="Event-cover"
            width={900}
            height={350}
          />
          <Card.Body>
            <Card.Title>Detail Event</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum fringilla maximus. Sed quis laoreet mi, et blandit
              ante. Fusce sollicitudin enim mauris, eget blandit lorem placerat
              vitae. Duis quis augue nibh. Sed dolor turpis, faucibus et est eu,
              vulputate faucibus sem.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="my-4">
          <Card.Header as="h5">Drop your Review!</Card.Header>
          <Card.Body className="d-flex">
            <Card.Title className="me-4">
              <Image
                src="/user-logo.svg"
                alt="user-logo"
                width={50}
                height={50}
              />
            </Card.Title>
            <Card.Title>
              <Card.Title>username</Card.Title>
              <Card.Text>
                Please add your content here. Keep it short and simple. And
                smile
              </Card.Text>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Body className="d-flex">
            <Card.Title className="me-4">
              <Image
                src="/user-logo.svg"
                alt="user-logo"
                width={50}
                height={50}
              />
            </Card.Title>
            <Card.Title>
              <Card.Title>UserName</Card.Title>
              <Card.Title>
                <Form.Group className="d-grid gap-2" controlId="formBasicEmail">
                  <Form.Control autoComplete="of" type="text" placeholder="" />
                </Form.Group>
              </Card.Title>
            </Card.Title>
          </Card.Body>
        </Card>
        <Button variant="outline-danger">Kirim</Button>
      </div>

      <div className="ms-3">
        <Card>
          <Card.Title>
            Design: Creating beatiful and intuitive UI/UX as o non-designer
          </Card.Title>
          <Card.Text>thursday, 19 May 2022</Card.Text>
          <Card.Text>18:00 PM</Card.Text>
          <Card.Text>online</Card.Text>
        </Card>
        <Card className="mt-4">
          <Card.Body className="d-flex justify-content-center">
            <Card.Title className="me-5">Harga Total</Card.Title>
            <Card.Title>Rp.350.000</Card.Title>
          </Card.Body>
          <Button className="mt-2" variant="danger" size="sm">
            beli tiket
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default DetailEvent;
