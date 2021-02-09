export interface TimelineItem {
  id: number;
  title: string | {[langId: string]: string};
  subtitle: string;
  description: string | {[langId: string]: string};
  location: string;
  dateStart: string;
  dateEnd: string;
}
