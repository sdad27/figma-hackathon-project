import Image from "next/image";
import LogoIcon from "../../../public/Logo Icon.png";
import Link from "next/link";
import fb from "../../../public/Group 44.svg";
import x from "../../../public/Group 48.svg";
import insta from "../../../public/Instagram 1.svg";
import pinter from "../../../public/Group 46.svg";
import yt from "../../../public/Group 47.svg";
import pay from "../../../public/paymentGateways.jpg";

export default function Footer() {
  return (
    <div className="d">
    <div className="footer">
      <div className="footer-container">
        <div className="box-container">
          
          <div className="footer-section">
            <div className="footer-title">
              <Image src={LogoIcon} alt="img" />
              <span>Comforty</span>
            </div>
            <p className="footer-description">
              Vivamus tristique odio sit amet velit semper, <br />
              eu posuere turpis interdum.
              <br />
              Cras egestas purus{" "}
            </p>
            <div className="social-links">
              <Link href="#">
                <Image src={fb} alt="img" />
              </Link>
              <Link href="#">
                <Image src={x} alt="img" />
              </Link>
              <Link href="#">
                <Image src={insta} alt="img" />
              </Link>
              <Link href="#">
                <Image src={pinter} alt="img" />
              </Link>
              <Link href="#">
                <Image src={yt} alt="img" />
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Category</h3>
            <ul className="footer-links">
              <li>
                <Link href="#" className="footer-link">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Armchair
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Wing Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Desk Chai
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Wooden Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Park Bench
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Spport</h3>
            <ul className="footer-links">
              <li>
                <Link href="#" className="footer-link">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading"></h3>
            <div className="newsletter">
              <div className="subscribe">
                <input
                  className="newsletter-input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  id=""
                />
                <span>
                  <button className="btn">Submit</button>
                </span>
              </div>
              <div className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nullam tincidunt erat enim.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="frame-69">
        <div className="zakirsoft">
          <span>
            <span className="zakirsoft-span">
              @ 2021 - Blogy - Designed &amp; Develop by
            </span>
            <span className="zakirsoft-span2">Zakirsoft</span>
          </span>
        </div>
        <div className="group-13">
          <div className="logos">
            <Image className="group-11" src={pay} alt="img" />
          </div>
          {/* <div className="rectangle-33"></div> */}
        </div>
      </div>
    </div>
  </div>
  );
}
