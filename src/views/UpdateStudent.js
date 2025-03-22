import { useState, useEffect } from "react";
import { updateStudent, getStudents } from "../services/students";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: "", mobile: "", attendance: "Present" });

  useEffect(() => {
    const fetchStudent = async () => {
      const students = await getStudents();
      const selectedStudent = students.find((s) => s.id === id);
      if (selectedStudent) setStudent(selectedStudent);
    };
    fetchStudent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(id, student);
    navigate("/"); 
  };

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} required />
        <input type="text" value={student.mobile} onChange={(e) => setStudent({ ...student, mobile: e.target.value })} required />
        <select value={student.attendance} onChange={(e) => setStudent({ ...student, attendance: e.target.value })}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
