import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/models/skill';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  subscription: Subscription;
  languages: Skill[];
  skills: Skill[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.currentMessage.subscribe(message => {
      this.load();
    }, error => console.log(error));
  }

  load(): void {
    this.apiService.getLanguages()
    .subscribe(response => {
      this.languages = response;
    }, error => console.log(error));
    this.apiService.getSkills()
    .subscribe(response => {
      this.skills = response;
    }, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
