import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';
import { Education } from '../models/education';
import { Certification } from '../models/certification';
import { Job } from '../models/job';
import { Briefcase } from '../models/briefcase';
import { Skill } from '../models/skill';
import { TimelineItem } from '../models/timeline-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<Profile> {
    const href = `${environment.API_HOST}/profile`;
    return this.http.get<Profile>(href)
  }

  public getEducation(): Observable<Education[]> {
    const href = `${environment.API_HOST}/education`;
    return this.http.get<Education[]>(href);
  }

  public getCertifications(): Observable<Certification[]> {
    const href = `${environment.API_HOST}/certifications`;
    return this.http.get<Certification[]>(href);
  }

  public getJobs(): Observable<Job[]> {
    const href = `${environment.API_HOST}/jobs`;
    return this.http.get<Job[]>(href);
  }

  public getBriefcase(): Observable<Briefcase[]> {
    const href = `${environment.API_HOST}/briefcase`;
    return this.http.get<Briefcase[]>(href);
  }

  public getLanguages(): Observable<Skill[]> {
    const href = `${environment.API_HOST}/languages`;
    return this.http.get<Skill[]>(href);
  }

  public getSkills(): Observable<Skill[]> {
    const href = `${environment.API_HOST}/skills`;
    return this.http.get<Skill[]>(href);
  }

  public educationToTimeline(education: Education[]): TimelineItem[] {
    return education.map(edItem => ({
      id: edItem.id,
      title: edItem.school,
      subtitle: "",
      description: edItem.description["en"],
      location: edItem.location,
      dateStart: edItem.dateStart,
      dateEnd: edItem.dateEnd
    }));
  }

  public jobsToTimeline(jobs: Job[]): TimelineItem[] {
    return jobs.map(job => ({
      id: job.id,
      title: job.title["en"],
      subtitle: job.company,
      description: "some placeholder for job description, as this value is missing in the API response",
      location: "somewhere",
      dateStart: job.dateStart,
      dateEnd: job.dateEnd
    }));
  }
}
