import { deleteStudent } from "../services/students";
import { useNavigate, useParams } from "react-router-dom";

const DeleteStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteStudent(id);
    navigate("/"); 
  };

  return (
    <div>
      <h2>Are you sure you want to delete this student?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default DeleteStudent;
