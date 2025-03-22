import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

const StudentList = () => {
  const { students } = useContext(StudentContext); 

  return (
    <div>
      <h2>Student List</h2>
      <Link to="/create">
        <button>Add Student</button>
      </Link>
      {students.map((student) => (
        <div key={student.id}>  { }
          <p>{student.name} - {student.mobile} - {student.attendance}</p>
          <Link to={`/update/${student.id}`}>
            <button>Edit</button>
          </Link>
          <Link to={`/delete/${student.id}`}>
            <button>Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
