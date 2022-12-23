import {NavLink , Link, useLocation} from "react-router-dom";
import "./footer.css";
import "./header.css";
import mainPageImage from "../img/background_image.jpg";
import subPageImage from "../img/subPage_Image.jpg";
import logo from "../img/HSU_department_of_computer_engineering.png";
import burgerMenu from "../img/burger_menu.png";

const navbarDown = () => {
    let d = document.getElementsByClassName("detail"); //Iterable, array-like
    let dc = document.getElementsByClassName("detail-container")[0];
    const details = Array.from(d); //Convert Iterable to Array
  
    for (var i = 0; i < details.length; i++) {
      if (details[i].style.display === "none") {
        details[i].style.display = "block";
        details[i].style.backgroundColor = "#000000";
        details[i].style.opacity = "30%";
      }
    }
  }
  
const navbarUp = () => {
    let d = document.getElementsByClassName("detail"); //Iterable, array-like
    const details = Array.from(d); //Convert Iterable to Array
    for (var i = 0; i < details.length; i++) {
      if (details[i].style.display === "block") {
        details[i].style.backgroundColor = "rgba(0,0,0,0)";
        details[i].style.opacity = "100%";
        details[i].style.display = "none";
      }
    }
  }

/**
 * 헤더
 */
export const Header = () => ( //issue: jquery로 한 부분..라이브러리 찾아서 가져다가 써야긌다.
    <header>
      <div className="topbar">
        <div className="topbar__logo">
          <Link to="/"><img
              src={logo}
              alt="한성대학교 컴퓨터공학부 로고"
              style={{width: '60%', height: '10%'}}
          /></Link>
        </div>

        <ul className="topbar__links">
          <li>
            <a href="https://www.hansung.ac.kr/sites/hansung/index.do"
              target="_blank"
              >한성대학교</a>
          </li>
          <li>
            <a href="https://info.hansung.ac.kr/" target="_blank"
              >종합정보시스템</a
            >
          </li>
          <li><a href="#">사이트맵</a></li>
          <li>
            <button
              id="toggle"
              type="button"
              title="MENU"
              style={{display: 'none'}}
            >
              <img src={burgerMenu} width="32px"></img>
            </button>
          </li>
        </ul>
      </div>

      <nav id="nav" onMouseOver={ () => navbarDown() } onMouseOut={ () => navbarUp()}>
        <div>
          <ul className="navbar">
            <li className="navbar__categories">
              <Link to="/intro/greeting">소개</Link>
            </li>

            <li className="navbar__categories">
              <Link to="/member/faculty">구성원</Link>
            </li>

            <li className="navbar__categories">
              <Link to="/undergraduate/education">학사과정</Link>
            </li>

            <li className="navbar__categories">
              <Link to="/activity/club">학생활동</Link>
            </li>

            <li className="navbar__categories">
              <Link to="/community/board">커뮤니티</Link>
            </li>
          </ul>
        </div>
        <div className="detail-container" style={{left: 0, right: 0}}>
          <ul className="detail" style={{display: 'none'}}>
            <li>
              <Link to="/intro/greeting"><span>학부장 인사말</span></Link>
            </li>
            <li>
              <Link to="/intro/education-goal"><span>교육 목표</span></Link>
            </li>
            <li>
              <Link to="/intro/history"><span>연혁</span></Link>
            </li>
            <li>
              <Link to="/intro/contacts"><span>위치 및 연락처</span></Link>
            </li>
          </ul>
          <ul className="detail" style={{display: 'none'}}>
            <li>
              <Link to="/member/faculty"><span>교수진</span></Link>
            </li>
            <li>
              <Link to="/member/enterprise"><span>가족기업</span></Link>
            </li>
            <li>
              <Link to="/member/committee"><span>위원회</span></Link>
            </li>
            <li>
              <Link to="/member/office"><span>학과사무실</span></Link>
            </li>
          </ul>
          <ul className="detail" style={{display: 'none'}}>
            <li>
              <Link to="/undergraduate/education"><span>교육과정</span></Link>
            </li>
            <li>
              <Link to="/undergraduate/curriculum"><span>교과과정</span></Link>
            </li>
            <li>
              <Link to="/undergraduate/graduation-requirement"><span>졸업요건</span></Link>
            </li>
          </ul>
          <ul className="detail" style={{display: 'none'}}>
            <li>
              <Link to="/activity/club"><span>동아리/소모임</span></Link>
            </li>
            <li>
              <Link to="/activity/capstone"><span>캡스톤디자인</span></Link>
            </li>
            <li>
              <Link to="/activity/contest"><span>공학경진대회</span></Link>
            </li>
            <li>
              <Link to="/activity/programming-camp"><span>프로그래밍 캠프</span></Link>
            </li>
          </ul>
          <ul className="detail" style={{display: 'none'}}>
            <li>
              <Link to="/community/board"><span>전체소식</span></Link>
            </li>
            <li>
              <Link to="/community/notice"><span>학사공지</span></Link>
            </li>
            <li>
              <Link to="/community/employment"><span>취업공지</span></Link>
            </li>
            <li>
              <Link to="/community/calendar"><span>캘린더</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
);

/**
 * 헤더 아래의 이미지. 메인페이지냐 상세페이지냐에 따라 달라진다.
 */
export const HeroImage = () => {
  const location = useLocation();
return (
    <div className="background" style={{position: 'relative', zIndex: -999}}>
      <img
        src={location.pathname == "/" ? mainPageImage : subPageImage}
        alt="컴퓨터공학부과 연관된 사진"
        width="100%"
        height= {location.pathname == "/" ? "480vw" : "300vw"}
      ></img>
    </div>
)
}


/**
 * 푸터
 */
export const Footer = () => (
    <footer>
  <div className="footer-wrap">
    <span>한성대학교 컴퓨터공학부</span>
    <p className="address">
      <span>{`(02876) 서울시 성북구 삼선교로 16길 116 한성대학교 컴퓨터공학부`}</span><br></br><span>Tel. 02-760-4137 | 02-760-4438</span>
    </p>
    <p className="copyright">
      Copyright ⓒ Hansung University, College of Computer Engineering. All
      Rights Reserved.
    </p>
  </div>
</footer>
);