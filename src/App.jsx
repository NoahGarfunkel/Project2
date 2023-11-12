import "./App.css";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/shared/header/Header";
import Syllabus from "./components/syllabus/Syllabus";
import Modules from "./components/modules/Modules";
import Assignments from "./components/assignments/Assignments";
import AssignmentDetail from "./components/assignments/AssignmentDetail";
import Upcoming from "./components/upcoming/Upcoming";
import Grades from "./components/grades/Grades";
import AnnouncementsList from "./components/announcements/AnnouncementsList";
import Announcement from "./components/announcements/Announcement";
import Zoom from "./components/zoom/Zoom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route 
            path="/" 
            exact 
            element={<Navigate to="/canvas/user/1/dashboard" />}
          />
          <Route 
            path="/canvas/user/:userId/dashboard" 
            exact 
            element={<Dashboard />} />
          <Route
            path="/canvas/user/:userId/class/:className/syllabus"
            exact
            element={<Syllabus />}
          />
          <Route
            path="/canvas/user/:userId/class/:className/modules"
            exact
            element={<Modules />}
          />
          <Route
            path="/canvas/user/:userId/class/:className/assignments"
            exact
            element={<Assignments />}
          />
          <Route
            path="/canvas/user/:userId/class/:className/upcoming"
            exact
            element={<Upcoming />}
          />
          <Route
            path="/canvas/user/:userId/class/:className/grades"
            exact
            element={<Grades />}
          />
          <Route
            path="/canvas/user/:userId/class/:className/announcements"
            exact
            element={<AnnouncementsList />}
          />
          <Route
            path="/canvas/user/:userId/class/:className/announcements/:announcementId"
            element={<Announcement />}
          />
          <Route
            path="/canvas/user/:userId/class/:className/assignments/:pageName"
            element={<AssignmentDetail />}
          />
          <Route
            path="/canvas/user/:userId/class/:className/zoom"
            element={<Zoom />}
          />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
