import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TitleItemComponent } from './components/title-item/title-item.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent,
    PortfolioComponent,
    SkillsComponent,
    ProfileComponent,
    TimelineComponent,
    TitleItemComponent,
    PortfolioItemComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
