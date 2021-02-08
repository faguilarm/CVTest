import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/certification';

@Component({
  selector: 'app-title-item',
  templateUrl: './title-item.component.html',
  styleUrls: ['./title-item.component.scss']
})
export class TitleItemComponent implements OnInit {

  @Input() data: Certification;

  constructor() { }

  ngOnInit(): void {
  }

}
