import axios from "axios";
import { LocalStorageTypes } from "../models/localstorage";
import { ILogin } from "../models/login";
import { setLocalStorage } from "../utilities/localStorage.utility";
import { API_URL } from "./config";

export const login = async (values: ILogin) => {
  try {
    if (!values.email || !values.password) {
      throw new Error("Email and password are required");
    }
    const response = await axios.post(`${API_URL}/auth/login`, values);

    if (response.status === 200) {
      setLocalStorage(LocalStorageTypes.TOKEN, response.data);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
