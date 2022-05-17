import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import Image from "next/image";

function DetailPemesanan() {
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
          <p>Tanggal</p>
          <p>waktu</p>
          <p>alamat</p>
          <div className="d-flex">
            <div>jumlah tiket</div>
            <div className="ms-5">
              <Button variant="outline-secondary">-</Button>{" "}
              <Button variant="outline-secondary">1</Button>{" "}
              <Button variant="outline-secondary">+</Button>{" "}
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
              <p>Rp.500.000</p>
              <p>1</p>
              <p>Rp.500.000</p>
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
