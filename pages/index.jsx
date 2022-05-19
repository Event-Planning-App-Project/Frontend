import { useState, useEffect } from "react";
import Bioskop from "../components/home/Bioskop";
import Konser from "../components/home/Konser";

export default function Home() {
  const [event, setEvent] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetcData = async () => {
      const res = await fetch("http://54.179.30.163:8050/category");
      const dataCategory = await res.json();

      setData(dataCategory);
    };
  }, [data]);

  return (
    <div>
      <div className="text-center px-5 py-3">
        <div>
          <h1 className="my-5">Temukan event mu</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h5 className="mx-2">
            <p onClick={() => setEvent(false)}>Bioskop online</p>
          </h5>
          <h5 className="mx-2">
            <p onClick={() => setEvent(true)}>Konser musik</p>
          </h5>
        </div>

        <div>{event ? <Konser /> : <Bioskop />}</div>
      </div>
    </div>
  );
}
