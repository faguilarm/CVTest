export interface Education {
  id: number;
  school: string;
  description: string | {[langId: string]: string};
  location: string;
  dateStart: string;
  dateEnd: string;
}
