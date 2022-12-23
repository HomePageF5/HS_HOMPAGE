import { Template } from "../MainPage";
import { CommunityMenu } from "./CommunityMenu";
import { Outlet } from "react-router-dom";
/**
 * 커뮤니티 페이지
 */
export const Community = () => (
  <Template>
    <CommunityMenu />
    <Outlet />
  </Template>
);
