import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'education',
        component: EducationComponent,
      },
      {
        path: 'experience',
        component: ExperienceComponent,
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      { path: '**', redirectTo: '/education' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
