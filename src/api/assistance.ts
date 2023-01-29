import axios from "axios";
import { API_URL } from "./config";

export const getAttendancesByStudent = async (studentId: number) => {
  try {
    if (!studentId) return console.log("No studentId provided");
    const response = await axios.get(`${API_URL}/assistances/${studentId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateAssistanceStatus = async (id: number, status: string) => {
  try {
    if (!id || !status) return console.log("No id or status");

    const response = await axios.put(`${API_URL}/assistances`, {
      id,
      status,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
