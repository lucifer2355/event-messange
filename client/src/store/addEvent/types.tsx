import { ThunkAction } from "redux-thunk";

export interface AddEventValues {
  title: string;
  message: string;
  emailFrom?: string;
  emailTo: string;
  phoneNoFrom?: number | null;
  phoneNoTo?: number | null;
  platforms: object[];
  //   media: string;
}
