import {Link} from "react-router-dom";
import "./Activity.css";
/**
 * 학생활동 서브메뉴
 */

export const ActivityMenu = () => (
    <>
    <div className="navebar">
          <div className="row text-center">
              <Link to="/activity/club" className="col-md-3 club">
                동아리/소모임
              </Link>
              <Link to="/activity/capstone" className="col-md-3 capstone">
                캡스톤디자인
              </Link>
              <Link to="/activity/contest" className="col-md-3 contest">
                공학경진대회
              </Link>
              <Link to="/activity/programming-camp" className="col-md-3 programming-camp">
                프로그래밍캠프
              </Link>
          </div>
      </div>
    </>
  );