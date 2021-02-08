import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/certification';
import { TimelineItem } from 'src/app/models/timeline-item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationHistory: TimelineItem[];
  certifications: Certification[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEducation()
    .subscribe(response => {
      this.educationHistory = this.apiService.educationToTimeline(response);
    }, error => console.log(error));
    this.apiService.getCertifications()
    .subscribe(response => {
      this.certifications = response;
    }, error => console.log(error));
  }
}
