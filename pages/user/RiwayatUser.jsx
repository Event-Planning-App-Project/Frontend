import Image from "next/image";
import { Card } from "react-bootstrap";

function RiwayatUser() {
  return (
    <div className="d-flex px-5 py-3 justify-content-center">
      <div>
        <div className="px-5 py-3 border rounded border-dark">
          <Image
            src="/user-logo.svg"
            alt="user-logo"
            width={125}
            height={125}
          />
          <p className="mt-3">Nama User</p>
          <p>emailuser@gmail.com</p>
        </div>
      </div>
      <div className="mx-5 px-5 d-flex">
        <div>
          <h6>Riwayat pembelian event</h6>
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
              <p>TITLE</p>
              <div>21 Mei 2022</div>
              <div>12.00 - 22.00 WIB</div>
              <p>CATAMARAN, BEACH CLUB, Bali</p>
            </div>
          </div>
        </div>
        <div className="mx-5">
          <h6>My Event</h6>
        </div>
      </div>
    </div>
  );
}

export default RiwayatUser;
