export interface Job {
  id: number;
  title: string | {[langId: string]: string};
  company: string;
  dateStart: string;
  dateEnd: string;
}
