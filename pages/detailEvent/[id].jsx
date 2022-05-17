import { Card, Form, Button } from "react-bootstrap";
import Image from "next/image";

function DetailEvent() {
  return (
    // detail event
    <div className="d-flex px-5 py-3">
      <div className="me-5">
        <Card>
          <Card.Img variant="top" />
          <Image
            src="/event-cover.svg"
            alt="Event-cover"
            width={350}
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

        {/* review */}
        <div className="pt-3">
          <Card>
            <Card.Header as="h5">Drop your Review!</Card.Header>
            <Card.Body className="d-flex">
              <div className="me-3">
                <Image
                  src="/user-logo.svg"
                  alt="user-logo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <Card.Title>username</Card.Title>
                <Card.Text>
                  Please add your content here. Keep it short and simple. And
                  smile
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* creat review */}
        <div className="py-3">
          <Card>
            <Card.Body className="d-flex">
              <div className="me-3">
                <Image
                  src="/user-logo.svg"
                  alt="user-logo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <Card.Title>username</Card.Title>
                <Card.Text>
                  <Form.Group
                    className="d-grid gap-2"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      autoComplete="of"
                      type="text"
                      placeholder=""
                    />
                  </Form.Group>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>

        <Button variant="outline-danger">Kirim</Button>
      </div>

      {/* date */}
      <div>
        <Card style={{ width: "25rem" }}>
          <Card.Body className="my-3">
            <Card.Title className=" mb-5">
              Design 101: Creating beautiful and intuitive UI/UX as a
              non-designer
            </Card.Title>
            <Card.Text>thursday, 19 May 2022</Card.Text>
            <Card.Text>18:00 PM</Card.Text>
            <Card.Text>online</Card.Text>
          </Card.Body>
        </Card>

        {/* harga tiket */}
        <Card className="my-4" style={{ width: "25rem" }}>
          <Card.Body>
            <div className="d-flex my-3">
              <Card.Text>harga tiket</Card.Text>
              <Card.Text className="ps-5 ms-5">Rp. 350.000</Card.Text>
            </div>
            <Button className="mt-2" variant="danger" size="sm">
              beli tiket
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default DetailEvent;
