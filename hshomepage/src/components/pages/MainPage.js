import React from "react";
import { Link } from "react-router-dom";
import { HeroImage, Header, Footer } from "../Menubar";
import "./MainPage.css";
import curriculumIcon from "./process.png";
import jobIcon from "./job.png";
import facultyIcon from "./professor.png";
/**
 * 페이지 템플릿
 */
export const Template = ({ children }) => (
  <>
    <Header />
    <HeroImage />
    {children}
    <Footer />
  </>
);

/**
 * 홈페이지 메인 페이지
 */

export const MainPage = () => (
  <Template>
    <main>
      <div className="main-wrapper">
        <div className="posts-wrapper">
          <section>
            <div className="notice">
              <div>
                <Link to="/community/board">
                  <span className="title">{`공지사항 >`}</span>
                </Link>
              </div>

              <div className="notice-posts">
                <ul>
                  <li>
                    <Link to="/community/board/#">
                      <span>게시글제목 예시입니다.</span>
                    </Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                    <Link to="/community/board/#">
                      <span>게시글제목 예시입니다.</span>
                    </Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                    <Link to="/community/board/#">
                      <span>게시글제목 예시입니다.</span>
                    </Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                    <Link to="/community/board/#">
                      <span>게시글제목 예시입니다.</span>
                    </Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                    <Link to="/community/board/#">
                      <span>게시글제목 예시입니다.</span>
                    </Link>
                    <span>2022-11-08</span>
                  </li>
                  <li>
                    <Link to="/community/board/#">
                      <span>게시글제목 예시입니다.</span>
                    </Link>
                    <span>2022-11-08</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="schedule">
              <div>
                <Link>
                  <span className="title">{`학사일정 >`}</span>
                </Link>
              </div>

              <div>
                <div style={{ backgroundColor: "darkgray" }}>
                  학사 달력 들어갈 자리
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="quick_menu-wrapper">
          <aside>
            <div className="quick_menu">
              <div>
                <span className="title">{`Quick Menu >`}</span>
              </div>

              <div className="quick_menu items">
                <div>
                  <Link to="/undergraduate/curriculum">
                    <img
                      src={curriculumIcon}
                      alt="교과과정 아이콘"
                      width="72px"
                      height="72px"
                    ></img>
                    <span>교과과정</span>
                  </Link>
                </div>
                <div>
                  <Link to="/community/employment">
                    <img
                      src={jobIcon}
                      alt="취업 및 연수 아이콘"
                      width="72px"
                      height="72px"
                    ></img>
                    <span>취업 및 연수</span>
                  </Link>
                </div>
                <div>
                  <Link to="/member/faculty">
                    <img
                      src={facultyIcon}
                      alt="교수진 아이콘"
                      width="72px"
                      height="72px"
                    ></img>
                    <span>학부교수진</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  </Template>
);
