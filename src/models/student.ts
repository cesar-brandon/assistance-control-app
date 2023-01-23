import { IAssistance } from "./assistance";

export interface IStudent {
  id: number;
  lastname: string;
  name: string;
  specialty: string;
  group: string;
  module: string;
}

export interface IStudentAssistance {
  id: number;
  lastname: string;
  name: string;
  specialty: string;
  group: string;
  module: string;
  assistances: IAssistance[];
}
