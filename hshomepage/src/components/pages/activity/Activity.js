import { Template } from "../MainPage";
import { ActivityMenu } from "./ActivityMenu";
import { Outlet } from "react-router-dom";
/**
 * 학생활동 페이지
 */
export const Activity = () => (
    <Template>
      <ActivityMenu />
      <Outlet />
    </Template>
);
