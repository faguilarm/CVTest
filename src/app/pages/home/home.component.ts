import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  profile: Profile;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.currentMessage.subscribe(message => {
      this.load();
    }, error => console.log(error));
  }

  load(): void {
    this.apiService.getProfile()
    .subscribe(response => {
      this.profile = response;
    }, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
