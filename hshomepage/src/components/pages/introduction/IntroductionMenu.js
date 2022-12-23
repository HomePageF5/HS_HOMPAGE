import {Link} from "react-router-dom";
import "./Introduction.css";
/**
 * 학부 소개 서브메뉴
 */
export const IntroductionMenu = () => (
    <div className="navebar">
          <div className="row text-center">
              <Link to="/intro/greeting" className="col-md-3 Greeting">
                  학부장 인사말
              </Link>
              <Link to="/intro/education-goal" className="col-md-3 EducationGoal">
                  교육목표
              </Link>
              <Link to="/intro/history" className="col-md-3 History">
                  연혁
              </Link>
              <Link to="/intro/contacts" className="col-md-3 Contacts">
                  위치 및 연락처
              </Link>
          </div>
      </div>
  );