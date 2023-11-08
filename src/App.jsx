import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Syllabus from "./components/syllabus/Syllabus";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/class/syllabus" exact element={<Syllabus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
