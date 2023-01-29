export interface IAssistance {
  id: number;
  idStudent: number;
  status: string;
  createAt: string;
  updateAt: string;
}

export interface IAssistanceState {
  currentAssistance: IAssistance | null;
}

export interface IAssistanceRegister {
  status: string;
  updateAt: string;
}
