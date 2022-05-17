import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <div className={styles.footerFull}>
      <div className="text-center py-4 content-footer text-align-left ">
        <Row>
          <Col>
            <h6>LOREMIPSUM</h6>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
          </Col>
          <Col>
            <h6>LOREMIPSUM</h6>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
          </Col>
          <Col>
            <h6>LOREMIPSUM</h6>
            <div>
              <Image
                className="px-2"
                src="/fb.svg"
                alt="Fb"
                width={40}
                height={40}
              />
              <Image
                className="px-2"
                src="/twitter.svg"
                alt="twitter"
                width={40}
                height={40}
              />
              <Image
                className="px-2"
                src="/ig.svg"
                alt="Ig"
                width={40}
                height={40}
              />
              <Image
                className="px-2"
                src="/google.svg"
                alt="Google"
                width={40}
                height={40}
              />
            </div>
            <div>
              <Image
                className="px-2"
                src="/youtube.svg"
                alt="Youtube"
                width={40}
                height={40}
              />
              <Image
                className="px-2"
                src="/telegram.svg"
                alt="Telegram"
                width={40}
                height={40}
              />
              <Image
                className="px-2"
                src="/discurd.svg"
                alt="Discurd"
                width={40}
                height={40}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
