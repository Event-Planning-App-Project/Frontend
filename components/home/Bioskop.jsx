import { useEffect, useState } from "react";
import Router from "next/router";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function Bioskop() {
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
    <div className="d-flex justify-content-center px-3">
      {/* {events.map((el, i) => (
        <div className="px-5" key={i}> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src=""
          // {el.urlEvent}
        />
        <Card.Body className="text-start">
          <Card.Title>{/* {el.name} */}</Card.Title>
          <Card.Text>{/* {el.dateStart} */}</Card.Text>
          <Card.Text>{/* {el.timeStart} - {el.timeEnd} */}</Card.Text>
          <Card.Text>
            Rp.
            {/* {el.price} */}
          </Card.Text>
        </Card.Body>
        <Button variant="danger" type="submit">
          Detail Event
        </Button>
      </Card>
    </div>
    //   ))}
    // </div>
  );
}
