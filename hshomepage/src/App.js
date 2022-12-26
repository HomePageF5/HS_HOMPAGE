import { Route, Routes, Navigate } from "react-router-dom";
import {MainPage} from "./components/pages/MainPage.js";
import {NotFound} from "./components/pages/NotFound.js";
import {Introduction} from "./components/pages/introduction/Introduction";
import {Greeting} from "./components/pages/introduction/greeting/Greeting";
import {EducationGoal} from "./components/pages/introduction/educationGoal/EducationGoal";
import {History} from "./components/pages/introduction/history/Histoty";
import {Contacts} from"./components/pages/introduction/contacts/Contacts";

import  {Member} from "./components/pages/member/Member";
import  {Faculty} from "./components/pages/member/faculty/Faculty";
import  {Committee} from "./components/pages/member/committee/Committee";
import  {Enterprise} from "./components/pages/member/enterprise/Enterprise";
import  {Office} from "./components/pages/member/office/Office";

import {Undergraduate} from "./components/pages/undergraduate/Undergraduate";
import {Education} from "./components/pages/undergraduate/education/Education";
import {Curriculum} from "./components/pages/undergraduate/curriculum/Curriculum";
import {GraduationRequirement} from "./components/pages/undergraduate/gradRequirement/GraduationRequirement";

import {Activity} from "./components/pages/activity/Activity";
import {Club, ClubList} from "./components/pages/activity/club/Club";
import {ClubInfo} from "./components/pages/activity/club/info/ClubInfo";
import {Contest} from "./components/pages/activity/contest/Contest";
import {Capstone} from "./components/pages/activity/capstone/Capstone";
import {ProgrammingCamp} from "./components/pages/activity/programmingCamp/ProgrammingCamp";

import {Community} from "./components/pages/community/Community";
import {Board} from "./components/pages/community/board/Board";
import {Notice} from "./components/pages/community/notice/Notice";
import {Employment} from "./components/pages/community/employment/Employment";
import {Calendar} from "./components/pages/community/calendar/Calendar";

const App = () => {
  
  return (
  <Routes>
    <Route path="/" element={<MainPage />} />

    <Route path="/intro/*" element={<Introduction />}>
      <Route path="" element={<Greeting />} />
      <Route path="greeting" element={<Greeting />} />
      <Route path="education-goal" element={<EducationGoal />} />
      <Route path="history" element={<History />} />
      <Route path="contacts" element={<Contacts />} />
    </Route>

    <Route path="/member/*" element={<Member />}>
      <Route path="" element={<Faculty />} />
      <Route path="faculty" element={<Faculty />} />
      <Route path="enterprise" element={<Enterprise />} />
      <Route path="committee" element={<Committee />} />
      <Route path="office" element={<Office />} />
    </Route>

    <Route path="/undergraduate/*" element={<Undergraduate />}>
      <Route path="" element={<Education />} />
      <Route path="education" element={<Education />} />
      <Route path="curriculum" element={<Curriculum />} />
      <Route
        path="graduation-requirement"
        element={<GraduationRequirement />}
      />
    </Route>

    <Route path="/activity/*" element={<Activity />}>
      <Route path="" element={<Club />} />
      <Route path="club" element={<Club />} >
        <Route path="" element={<ClubList />} />
        <Route path=":id" element={<ClubInfo />}/>
      </Route>
      <Route path="capstone" element={<Capstone />} />
      <Route path="contest" element={<Contest />} />
      <Route path="programming-camp" element={<ProgrammingCamp />} />
    </Route>

    <Route path="/community/*" element={<Community />}>
      <Route path="" element={<Board />} />
      <Route path="board" element={<Board />} />
      <Route path="notice" element={<Notice />} />
      <Route path="employment" element={<Employment />} />
      <Route path="calendar" element={<Calendar />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)};
export default App;
