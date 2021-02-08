export interface Certification {
  id: number;
  key: string;
  title: string | {[langId: string]: string};
  description: string | {[langId: string]: string};
  registred: string;
}
