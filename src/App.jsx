import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Syllabus from "./components/syllabus/Syllabus";
import Modules from "./components/modules/Modules";
import Assignments from "./components/Assignments/assignments";
import AssignmentDetail from "./components/assignments/AssignmentDetail";
import Upcoming from "./components/upcoming/Upcoming";
import Grades from "./components/grades/Grades";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/class/syllabus" exact element={<Syllabus />} />
          <Route path="/class/modules" exact element={<Modules />} />
          <Route path="/class/assignments/" exact element={<Assignments />} />
          <Route path="/class/upcoming/" exact element={<Upcoming />} />
          <Route path="/class/grades/" exact element={<Grades />} />
          <Route path="/assignments/:pageName" element={<AssignmentDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
