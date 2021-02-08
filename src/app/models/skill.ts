export interface Skill {
  id: number;
  label: string | {[langId: string]: string};
  percentage: number;
}
