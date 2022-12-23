import { Template } from "../MainPage";
import { MemberMenu } from "./MemberMenu";
import { Outlet } from "react-router-dom";
/**
 * 구성원 페이지
 */
export const Member = () => (
  <Template>
    <MemberMenu />
    <Outlet />
  </Template>
);
