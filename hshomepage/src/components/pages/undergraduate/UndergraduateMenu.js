import {Link} from "react-router-dom";
import "./Undergraduate.css";
/**
 * 학사과정 서브메뉴
 */

export const UndergraduateMenu = () => (
    <>
    <div className="navebar">
          <div className="row text-center">
              <Link to="/undergraduate/education" className="col-md-3 education">
                  교육과정
              </Link>
              <Link to="/undergraduate/curriculum" className="col-md-3 curriculum">
                  교과과정
              </Link>
              <Link to="/undergraduate/graduation-requirement" className="col-md-3 graduation-requirement">
                  졸업요건
              </Link>
          </div>
      </div>
    </>
  );