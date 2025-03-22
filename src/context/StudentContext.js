import { createContext, useState, useEffect } from "react";
import { getStudents, addStudent, updateStudent, deleteStudent } from "../services/students";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

 
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  
  const handleAddStudent = async (studentData) => {
    const newStudent = await addStudent(studentData);
    if (newStudent) {
      setStudents([...students, newStudent]);
    }
  };

  
  const handleUpdateStudent = async (id, updatedData) => {
    const updatedStudent = await updateStudent(id, updatedData);
    if (updatedStudent) {
      setStudents(students.map(student => (student.id === id ? updatedStudent : student)));
    }
  };

 
  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, handleAddStudent, handleUpdateStudent, handleDeleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
