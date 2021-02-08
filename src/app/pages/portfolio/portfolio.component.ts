import { Component, OnInit } from '@angular/core';
import { Briefcase } from 'src/app/models/briefcase';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioItems: Briefcase[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBriefcase()
    .subscribe(response => {
      this.portfolioItems = response;
    }, error => console.log(error));
  }
}
