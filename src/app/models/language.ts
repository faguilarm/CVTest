export interface Language {
  id: number;
  label: string | {[langId: string]: string};
  percentage: number;
}
