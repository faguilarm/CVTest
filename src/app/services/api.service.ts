import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";
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

  private messageSource = new BehaviorSubject("en");
  currentMessage = this.messageSource.asObservable();
  currentLanguage = "en";

  constructor(private http: HttpClient) { }

  public toggleLanguage() {
    this.currentLanguage = this.currentLanguage === "en"? "es" : "en";
    console.log("toggled to ", this.currentLanguage);
    this.messageSource.next(this.currentLanguage);
  }

  public changeLanguage(newLang: string) {
    this.currentLanguage = newLang;
  }

  public getProfile(): Observable<Profile> {
    const href = `${environment.API_HOST}/profile`;
    return this.http.get<Profile>(href)
    .pipe(
      map(response => {
        return {...response, aboutMe: response.aboutMe[this.currentLanguage]}
      })
    );
  }

  public getEducation(): Observable<Education[]> {
    const href = `${environment.API_HOST}/education`;
    return this.http.get<Education[]>(href)
    .pipe(
      map(response => {
        return response.map(item => ({...item, description: item.description[this.currentLanguage]}))
      })
    );
  }

  public getCertifications(): Observable<Certification[]> {
    const href = `${environment.API_HOST}/certifications`;
    return this.http.get<Certification[]>(href)
    .pipe(
      map(response => {
        return response.map(item => ({...item, title: item.title[this.currentLanguage], description: item.description[this.currentLanguage]}))
      })
    );
  }

  public getJobs(): Observable<Job[]> {
    const href = `${environment.API_HOST}/jobs`;
    return this.http.get<Job[]>(href)
    .pipe(
      map(response => {
        return response.map(item => ({...item, title: item.title[this.currentLanguage]}))
      })
    );
  }

  public getBriefcase(): Observable<Briefcase[]> {
    const href = `${environment.API_HOST}/briefcase`;
    return this.http.get<Briefcase[]>(href)
    .pipe(
      map(response => {
        return response.map(item => ({...item, title: item.title[this.currentLanguage], description: item.description[this.currentLanguage]}))
      })
    );
  }

  public getLanguages(): Observable<Skill[]> {
    const href = `${environment.API_HOST}/languages`;
    return this.http.get<Skill[]>(href)
    .pipe(
      map(response => {
        return response.map(item => ({...item, label: item.label[this.currentLanguage]}))
      })
    );
  }

  public getSkills(): Observable<Skill[]> {
    const href = `${environment.API_HOST}/skills`;
    return this.http.get<Skill[]>(href)
    .pipe(
      map(response => {
        return response.map(item => ({...item, label: item.label[this.currentLanguage]}))
      })
    );
  }

  public educationToTimeline(education: Education[]): TimelineItem[] {
    return education.map(edItem => ({
      id: edItem.id,
      title: edItem.school,
      subtitle: "",
      description: edItem.description,
      location: edItem.location,
      dateStart: edItem.dateStart,
      dateEnd: edItem.dateEnd
    }));
  }

  public jobsToTimeline(jobs: Job[]): TimelineItem[] {
    return jobs.map(job => ({
      id: job.id,
      title: job.title,
      subtitle: job.company,
      description: "some placeholder for job description, as this value is missing in the API response",
      location: "somewhere",
      dateStart: job.dateStart,
      dateEnd: job.dateEnd
    }));
  }
}
