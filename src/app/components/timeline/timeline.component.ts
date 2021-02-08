import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'src/app/models/timeline-item';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() history: TimelineItem[];

  constructor() { }

  ngOnInit(): void {
  }
}
