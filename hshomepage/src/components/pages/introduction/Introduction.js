import { Template } from "../MainPage";
import { IntroductionMenu } from "./IntroductionMenu";
import { Outlet } from "react-router-dom";

/**
 * 학부소개 페이지
 */

export const Introduction = () => (
  <Template>
    <IntroductionMenu />
    <Outlet />
  </Template>
);
