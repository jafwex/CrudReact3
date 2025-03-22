import { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const { handleAddStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    mobile: "",
    attendance: "Present",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddStudent(student);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
      <select name="attendance" onChange={handleChange}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default CreateStudent;
