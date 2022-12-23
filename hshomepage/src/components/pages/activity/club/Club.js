import { Link, Outlet } from "react-router-dom";
import "./Club.css";
import { PageFormat } from "../../../pageFormats";
import data from "./info/club-data.json";
import logo from "./club_logos/logo.png";
/**
 * 동아리 / 소모임
 */

export const Club = () => {
  return (
    <PageFormat title="동아리/소모임">
      <Outlet />
    </PageFormat>
  );
};

export const ClubList = () => {
  const clubData = data;
  return (
    <ul className="club_intro">
      {clubData.data.map((club, i) => (
        <li key={i}>
          <div className="club_intro-element">
            <img
              src={logo} //사진 왜 안나오냐
              alt="club logo image"
              width="72"
              height="72"
            ></img>

            <div>
              <Link to={club.id}>
                <span>{club.name}</span>
              </Link>
              <p>{club.introduction}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
