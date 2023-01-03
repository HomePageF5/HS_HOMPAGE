import "./Faculty.css";
import "../Member.css";
import { PageFormat } from "../../../pageFormats";
import data from "./faculty-data.json";
/**
 * 교수진
 */
export const Faculty = () => {
    const facultyData = data;
  return (
    <PageFormat title="교수진">
        {
            facultyData.data.map( (professor,i) => (
                <div key ={i}>
                      <div>
        <hr style={{ border: "solid 1px black" }} />
        <div className="upper-inner-box">
          <div>
            <img
              className="professor_img"
              src=""
              style={{ width: "90px", height: "120px", marginLeft: "20px" }}
            ></img>
          </div>
          <div className="upper-inner-box-right-side">
            <hr className="hr" align="left" style={{ width: "40px" }} />
            <div className="name">{professor.name} {professor.rank}님</div>
            <br />
            <div className="upper-inner">연구실 전화번호 | 02-760-{professor.telephone}</div>
            <div className="upper-inner">연구실 위치 | {professor.office}</div>
            <div className="upper-inner">전공 | {professor.major}</div>
            <div className="upper-inner">이메일 | {professor.email}@hansung.ac.kr</div>
          </div>
        </div>
        <hr style={{ border: "solid 1px lightgray" }} />
      </div>

      <button id="btn_toggle">더 보기</button>

      <div id="Toggle" style={{ display: "none" }}>
        <div className="lower-inner-box">
          <hr className="hr" align="left" style={{ width: "55px" }} />
          <div className="lower-inner">논문실적</div>
          <br />
          <hr className="hr" align="left" style={{ width: "55px" }} />
          <div className="lower-inner">저서실적</div>
          <br />
          <hr className="hr" align="left" style={{ width: "55px" }} />
          <div className="lower-inner">학술활동</div>
          <br />
        </div>
      </div>
                </div>
            ))
        }
    </PageFormat>
  );
};
