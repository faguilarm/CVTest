import { Contact } from "./contact";

export interface Profile {
  picture: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  aboutMe: string | {[langId: string]: string};
  contact: Contact;
}
