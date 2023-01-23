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
        const rowsStudents = response.data.map(
          (student: IStudentAssistance) => ({
            id: student.id,
            lastname: student.lastname,
            name: student.name,
            specialty: student.specialty,
            group: student.group,
            module: student.module,
            status: student.assistances
              .map((assistance) => assistance.status)
              .join(", "),
          })
        );
        setStudents(rowsStudents);
      } catch (err) {
        return err;
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return { students, loading };
}
