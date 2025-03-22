import axiosClient from "../config/axiosClient";

export const getStudents = async () => {  
  try {
    const response = await axiosClient.get("/hell");
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error.response?.data || error.message);
    return [];
  }
};

export const addStudent = async (studentData) => {
  try {
    const response = await axiosClient.post("/hell", studentData);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error.response?.data || error.message);
    return null;
  }
};

export const updateStudent = async (id, updatedData) => {
  try {
    const response = await axiosClient.put(`/hell/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating student:", error);
    return null;
  }
};

export const deleteStudent = async (id) => {
  try {
    await axiosClient.delete(`/hell/${id}`);
  } catch (error) {
    console.error("Error deleting student:", error);
  }
};
