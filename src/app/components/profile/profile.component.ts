import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() data: Profile;

  constructor() { }

  ngOnInit(): void {
    console.log("profile is ", this.data);
  }

}
