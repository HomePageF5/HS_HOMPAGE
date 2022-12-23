/**
 * 위치 및 연락처
 */
import "./Contacts.css";
import locationIcon from "./location_icon.png";
import telephoneIcon from "./telephone_icon.png";
import faxIcon from "./fax_icon.png";
import { PageFormat } from "../../../pageFormats";

export const Contacts = () => (
  <PageFormat title="위치 및 연락처">
    <div id="map" style={{ width: "500px", height: "400px" }}></div>
    <address>
      <p>
        <strong>{`02876 서울특별시 성북구 삼선교로 16길 (삼선동2가) 116
            한성대학교`}</strong>
      </p>
      <div className="contact-wrapper">
        <div className="contact">
          <img src={locationIcon} alt="location icon"></img>
          <b>Location</b>
          <span>공학관 A동 102호</span>
        </div>
        <div className="contact">
          <img src={telephoneIcon} alt="telephone icon"></img>
          <b>TEL</b>
          <span>02-760-0000~0</span>
        </div>
        <div className="contact">
          <img src={faxIcon} alt="fax icon"></img>
          <b>FAX</b>
          <span>02-000-0000</span>
        </div>
      </div>
    </address>
  </PageFormat>
);
