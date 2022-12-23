/**
 * 위치 및 연락처
 */
import "./Contacts.css";
import "../Introduction.css";
import locationIcon from "./location_icon.png";
import telephoneIcon from "./telephone_icon.png";
import faxIcon from "./fax_icon.png";
import { PageFormat } from "../../../pageFormats";
import { useEffect } from "react";

const { kakao } = window;
export const Contacts = () => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.5817835, 127.0098549), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  
    const markerPosition = new kakao.maps.LatLng(37.5817835, 127.0098549);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, []);

  return (
    <PageFormat title="위치 및 연락처">
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      <address>
        <p>
          <strong>{`02876 서울특별시 성북구 삼선교로 16길 (삼선동2가) 116
            한성대학교 공학관A동 102호가 맞는지 확인해야함`}</strong>
        </p>
        <div className="contact-wrapper">
          <div className="contact">
            <img src={locationIcon} alt="location icon" width="48px"></img>
            <b>Location</b>
            <span>공학관 A동 102호</span>
          </div>
          <div className="contact">
            <img src={telephoneIcon} alt="telephone icon" width="48px"></img>
            <b>TEL</b>
            <span>02-760-0000~0</span>
          </div>
          <div className="contact">
            <img src={faxIcon} alt="fax icon" width="48px"></img>
            <b>FAX</b>
            <span>02-000-0000</span>
          </div>
        </div>
      </address>
    </PageFormat>
  );
};
