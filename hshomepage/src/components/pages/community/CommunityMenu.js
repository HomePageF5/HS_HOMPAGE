import {Link} from "react-router-dom";
import "./Community.css";
/**
 * 커뮤니티 서브메뉴
 */

export const CommunityMenu = () => (
    <>
    <div className="navebar">
          <div className="row text-center">
              <Link to="/community/board" className="col-md-3 board">
                전체소식
              </Link>
              <Link to="/community/notice" className="col-md-3 notice">
                학사공지
              </Link>
              <Link to="/community/employment" className="col-md-3 employment">
                취업공지
              </Link>
              <Link to="/community/calendar" className="col-md-3 calendar">
                캘린더
              </Link>
          </div>
      </div>
    </>
  );