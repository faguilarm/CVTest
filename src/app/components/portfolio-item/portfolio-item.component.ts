import { Component, Input, OnInit } from '@angular/core';
import { Briefcase } from 'src/app/models/briefcase';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() data: Briefcase;

  constructor() { }

  ngOnInit(): void {
  }

}
