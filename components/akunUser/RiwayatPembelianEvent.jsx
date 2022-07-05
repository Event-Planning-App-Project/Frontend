import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";

function RiwayatPembelianEvent() {
  return (
    <div>
      <div className="d-flex">
        <div className="mt-5">
          <Card style={{ width: "10rem" }}>
            <Image
              src="/event-cover.svg"
              alt="Event-cover"
              width={350}
              height={350}
            />
          </Card>
        </div>
        <div className="px-5 py-3 ">
          <p>Riwayat Pembelian Event</p>
          <div>21 Mei 2022</div>
          <div>12.00 - 22.00 WIB</div>
          <p>CATAMARAN, BEACH CLUB, Bali</p>
        </div>
      </div>
    </div>
  );
}

export default RiwayatPembelianEvent;
