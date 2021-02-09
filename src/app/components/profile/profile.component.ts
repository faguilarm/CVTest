import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Profile } from 'src/app/models/profile';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  subscription: Subscription;
  @Input() data: Profile;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    console.log("profile is ", this.data);
  }

  toggleLanguage() {
    console.log("toggleLanguage");
    this.apiService.toggleLanguage();
  }
}
