import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profile: Profile;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProfile()
    .subscribe(response => {
      console.log(response, response.aboutMe, response.firstName);
      this.profile = response;
    }, error => console.log(error));
  }
}
