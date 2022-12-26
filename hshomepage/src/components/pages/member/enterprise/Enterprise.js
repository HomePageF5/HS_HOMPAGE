import "./Enterprise.css";
import "../Member.css";
import { PageFormat } from "../../../pageFormats";
import data from "./enterprise-data.json";

/**
 * 가족기업
 */
export const Enterprise = () => {
  const enterpriseData = data;
  return (
    <PageFormat title="가족기업">
      <ul>
        {enterpriseData.data.map((enterprise, i) => (
          <li key={i}>
            <div>
              <a href={enterprise.pageUrl}>
                <img
                  src={require(enterprise.imgUrl)}
                  alt="회사 로고"
                ></img>
              </a>
            </div>
            <article>
              <a href={enterprise.pageUrl}>
                <h4>{enterprise.name}</h4>
              </a>
              <p>{enterprise.introduction}</p>
            </article>
          </li>
        ))}
      </ul>
    </PageFormat>
  );
}