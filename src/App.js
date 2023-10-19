import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import NavBar from "./component/common/NavBar";
import StudentView from "./component/student/StudentView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddStudents from "./component/student/AddStudents";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";
function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentView />}></Route>
          <Route exact path="/add-students" element={<AddStudents />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent />}></Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
