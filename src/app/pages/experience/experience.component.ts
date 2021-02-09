import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimelineItem } from 'src/app/models/timeline-item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  subscription: Subscription;
  jobHistory: TimelineItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.currentMessage.subscribe(message => {
      this.load();
    }, error => console.log(error));
  }

  load(): void {
    this.apiService.getJobs()
    .subscribe(response => {
      this.jobHistory = this.apiService.jobsToTimeline(response);
    }, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
