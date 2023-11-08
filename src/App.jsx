import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Syllabus from "./components/syllabus/Syllabus";
import Assignments from "./components/assignments/Assignments";
import AssignmentDetail from "./components/assignments/AssignmentDetail";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/class/syllabus" exact element={<Syllabus />} />
          <Route path="/class/assignments/" exact element={<Assignments />} />
          <Route path="/assignments/:pageName" element={<AssignmentDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
