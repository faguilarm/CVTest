export interface Briefcase {
  id: number;
  image: string;
  title: string | {[langId: string]: string};
  description: string | {[langId: string]: string};
  date: string;
}
