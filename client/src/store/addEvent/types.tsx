export interface AddEventValues {
  title: string;
  message: string;
  emailFrom?: string;
  emailTo: string;
  phoneNoFrom?: number;
  phoneNoTo?: number;
  platforms: string[];
  //   media: string;
}
