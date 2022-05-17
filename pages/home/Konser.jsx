import { Card, Button } from "react-bootstrap";
import Link from "next/link";

function Konser() {
  return (
    <div>
      <div className="text-center px-5 py-3">
        <div>
          <h1 className="my-5">Temukan event mu</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h5 className="mx-2">
            <Link href="/">
              <a>Bioskop online</a>
            </Link>
          </h5>
          <h5 className="mx-2">
            <a>Konser musik</a>
          </h5>
        </div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Konser</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Konser;
