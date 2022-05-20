import { Card, Form, Button } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";

function DetailEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://54.179.30.163:8050/event");
      const dataMusic = await res.json();

      setEvents(dataMusic.data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="d-flex justify-content-center px-5 py-3">
      {events.map((el, i) => (
        <div key={1}>
          <div className="me-3">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={el.urlEvent} />
              {/* <Image
                src={el.urlEvent}
                alt="Event-cover"
                width={900}
                height={350}
              /> */}
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>{el.description}</Card.Text>
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
                  </Card.Title>
                </Card.Title>
              </Card.Body>
            </Card>
            <Button variant="outline-danger">Kirim</Button>
          </div>

          <div className="ms-3">
            <Card>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.dateStart}</Card.Text>
              <Card.Text>{el.timeStart}</Card.Text>
              <Card.Text>online</Card.Text>
            </Card>
            <Card className="mt-4">
              <Card.Body className="d-flex justify-content-center">
                <Card.Title className="me-5">Harga Total</Card.Title>
                <Card.Title>Rp. {el.price}</Card.Title>
              </Card.Body>
              <Link href="/detailPemesanan/1">
                <a>
                  <Button className="mt-2" variant="danger" size="sm">
                    beli tiket
                  </Button>
                </a>
              </Link>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailEvent;
