import { Template } from "../MainPage";
import { UndergraduateMenu } from "./UndergraduateMenu";
import { Outlet } from "react-router-dom";
/**
 * 학사과정 페이지
 */
export const Undergraduate = () => (
  <Template>
    <UndergraduateMenu />
    <Outlet />
  </Template>
);
