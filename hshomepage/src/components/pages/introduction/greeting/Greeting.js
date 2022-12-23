import "./Greeting.css";
import "../Introduction.css";
import { PageFormat } from "../../../pageFormats";
/**
 * 학부장 인삿말
 */
export const Greeting = () => (
  <PageFormat title="학부장인삿말">
    <article>
      한성대학교 컴퓨터 공학부는 기존의 컴퓨터공학과와 멀티미디어 공학과를
      합병하여 2016년 1학기부터 새로이 출범하였습니다. 창의적인 문제 해결 능력을
      갖춘 글로벌 SW 인재 양성을 목표로 4개의 트랙별 교과 과정을 운영하고
      있으며, 산업체와의 유기적인 연계를 통해 실무 교육을 진행하고 있습니다.
      본교의 최대 학부로서 19명의 전임 교원이 학부 교육을 담당하고 있으며
      학생들은 SW 경진 대회, 국내외 인턴쉽 참가, 학술 소모임 등 활발이 활동하고
      있습니다. 앞으로도 교육, 산학, 연구를 축으로 IT 분야를 선도하는 학부가
      되도록 노력하겠습니다. 감사합니다.
    </article>
  </PageFormat>
);
