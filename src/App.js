import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentProvider from "./context/StudentContext";  
import StudentList from "./components/StudentList";
import CreateStudent from "./views/CreateStudent";
import UpdateStudent from "./views/UpdateStudent";
import DeleteStudent from "./views/DeleteStudent";

const App = () => {
  return (
    <StudentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/delete/:id" element={<DeleteStudent />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
};

export default App;
