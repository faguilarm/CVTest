import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Briefcase } from 'src/app/models/briefcase';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  subscription: Subscription;
  portfolioItems: Briefcase[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.currentMessage.subscribe(message => {
      this.load();
    }, error => console.log(error));
  }

  load(): void {
    this.apiService.getBriefcase()
    .subscribe(response => {
      this.portfolioItems = response;
    }, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
