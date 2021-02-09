import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Certification } from 'src/app/models/certification';
import { TimelineItem } from 'src/app/models/timeline-item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  subscription: Subscription;
  educationHistory: TimelineItem[];
  certifications: Certification[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.currentMessage.subscribe(message => {
      this.load();
    }, error => console.log(error));
  }

  load(): void {
    this.apiService.getEducation()
    .subscribe(response => {
      this.educationHistory = this.apiService.educationToTimeline(response);
    }, error => console.log(error));
    this.apiService.getCertifications()
    .subscribe(response => {
      this.certifications = response;
    }, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
