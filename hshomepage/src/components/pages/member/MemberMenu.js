import {Link} from "react-router-dom";
import "./Member.css";
/**
 *  학부구성원 소개 서브메뉴
 */

export const MemberMenu = () => (
    <>
    <div className="navebar">
          <div className="row text-center">
              <Link to="/member/faculty" className="col-md-3 faculty">
                  교수진
              </Link>
              <Link to="/member/enterprise" className="col-md-3 enterpirse">
                  가족 기업
              </Link>
              <Link to="/member/committee" className="col-md-3 committee">
                  위원회
              </Link>
              <Link to="/member/office" className="col-md-3 office">
                  학과사무실
              </Link>
          </div>
      </div>
    </>
  );