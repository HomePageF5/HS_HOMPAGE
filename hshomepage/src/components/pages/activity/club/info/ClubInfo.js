import "./ClubInfo.css";
import "../../Activity.css";
import data from "./club-data.json";
import { useParams } from "react-router-dom";
/**
 * 동아리/소모임 소개
 */
export const ClubInfo = () => {
  const { id } = useParams();
  const clubData = data;
  const club = clubData.data.reduce((obj1, obj2) =>
    obj1.id == id ? obj1 : obj2
  );

  if (!club) return <div>해당 동아리 혹은 소모임에 대한 정보는 없습니다.</div>;

  return (
    <ul className="club_intro">
      <li>
        <span>{club.name}</span>
      </li>
      <li>
        <ul className="club_intro-detail">
          <li>
            <span>{club.name}</span>
            <p>{club.introduction}</p>
          </li>
          <li>
            <span>모집일정</span>
            <p>{club.recruitment}</p>
          </li>
          <li>
            <span>대표 프로젝트</span>
            <ul>
              {
                club.projects.map( (prj, i) => (
                  <li key={i}>
                <a href={`${prj.link}`}>{prj.title}</a>
              </li>
                ))
              }
            </ul>
          </li>
          <li>
            <span>동아리방 위치</span>
            <p>{club.location}</p>
          </li>
          <li>
            <span>동아리 SNS</span>
            <ul>
            {
                club.socialMedia.map( (sns, i) => (
                  <li key={i}>
                <a href={`${sns.link}`}>{sns.flatform}</a>
              </li>
                ))
              }
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
