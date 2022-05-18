import Image from "next/image";
import { useState } from "react";
import { Card } from "react-bootstrap";
import RiwayatPembelianEvent from "../../components/akunUser/RiwayatPembelianEvent";
import MyEvent from "../../components/akunUser/MyEvent";

function Profile() {
  const [handleMyEvent, setHandleMyEvent] = useState(false);

  return (
    <div className="d-flex px-5 py-3 justify-content-center">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">
            <Image
              src="/user-logo.svg"
              alt="user-logo"
              width={125}
              height={125}
            />
            <p className="mt-3">Nama User</p>
            <p>emailuser@gmail.com</p>
          </Card.Title>
        </Card.Body>
      </Card>
      <div className="mx-5 px-5 d-flex">
        <div>
          <h6 onClick={() => setHandleMyEvent(false)}>
            Riwayat pembelian event
          </h6>
          <div className="mt-5">
            {handleMyEvent ? <MyEvent /> : <RiwayatPembelianEvent />}
          </div>
        </div>
        <div className="mx-5">
          <h6 onClick={() => setHandleMyEvent(true)}>My Event</h6>
        </div>
      </div>
    </div>
  );
}

export default Profile;
