import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/certification';

@Component({
  selector: 'app-title-item',
  templateUrl: './title-item.component.html',
  styleUrls: ['./title-item.component.scss']
})
export class TitleItemComponent implements OnInit {

  IMAGE = "data:image/png;base64,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";

  @Input() data: Certification;

  constructor() { }

  ngOnInit(): void {
  }

}
