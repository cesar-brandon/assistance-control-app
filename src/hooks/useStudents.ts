import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../api/config";
import { LocalStorageTypes } from "../models/localstorage";
import { IStudentAssistance } from "../models/student";
import { getLocalStorage } from "../utilities/localStorage.utility";

export default function useStudents() {
  const [students, setStudents] = useState<IStudentAssistance[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const ACCESS_TOKEN = getLocalStorage(LocalStorageTypes.TOKEN)?.replace(
          /\"/g,
          ""
        );
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${ACCESS_TOKEN}`;
        const response = await axios.get(`${API_URL}/students`);
        setStudents(response.data);
      } catch (err) {
        return err;
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return { students, loading };
}
