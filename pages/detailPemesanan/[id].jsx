import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function DetailPemesanan() {
  const [count, setCount] = useState(1);
  const price = "30000";

  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://54.179.30.163:8050/transaction");
      const dataPesanan = await res.json();

      setEvents(dataPesanan);
      console.log(dataPesanan);
    };
    fetchData().catch(console.error);
  }, []);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="px-5 py-3">
      <h2 className="mb-4">Detail Pesanan</h2>
      <div className="py-3 px-3 mb-4 d-flex border rounded border-dark">
        <div className="me-5">
          <Card style={{ width: "15rem" }}>
            <Image
              src="/event-cover.svg"
              alt="Event-cover"
              width={350}
              height={350}
            />
          </Card>
        </div>

        <div>
          <h4 className="my-2">Judul Event</h4>
          <div className="d-flex">
            <div className="me-4">
              <p>Tanggal </p>
              <p>waktu </p>
              <p>alamat </p>
            </div>
            <div className="ms-5">
              <p>29 Mei 2022</p>
              <p>20.00 WIB - 21.30 WIB</p>
              <p>Zoom Online</p>
            </div>
          </div>

          <div className="d-flex">
            <div>jumlah tiket</div>
            <div className="ms-5">
              <Button variant="outline-secondary" onClick={decrementCount}>
                -
              </Button>
              <Button variant="outline-secondary">{count}</Button>
              <Button variant="outline-secondary" onClick={incrementCount}>
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="me-5 pe-5">
          <h5 className="text-center">Data Pemesanan</h5>
          <Form className="mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                autoComplete="of"
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>
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
          </Form>
        </div>
        <div className="ms-5 ps-5">
          <h5 className="text-center">Detail Pembayaran</h5>
          <div className="mt-3 d-flex">
            <div className="me-5 pe-5">
              <p>total harga tiket</p>
              <p>jumlah tiket</p>
              <p>total pembayaran</p>
            </div>
            <div className="ms-5 ps-5 text-end">
              <p>Rp. {price}</p>
              <p>{count}</p>
              <p>Rp. {price * count}</p>
            </div>
          </div>
          <Button variant="danger" size="sm">
            bayar tiket
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailPemesanan;
