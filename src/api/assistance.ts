import axios from "axios";
import { API_URL } from "./config";

export const updateAssistanceStatus = async (id: number, status: string) => {
  try {
    if (!id || !status) throw new Error("Missing parameters");
    const response = await axios.put(`${API_URL}/assistance/`, {
      id,
      status,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
