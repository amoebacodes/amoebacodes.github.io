import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsBannerComponent } from './skills-banner/skills-banner.component';
import { SkillsCardComponent } from './skills-banner/skills-card/skills-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoCaptionComponent } from './skills-banner/skills-card/logo-caption/logo-caption.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectExpansionPanelComponent } from './projects-list/project-expansion-panel/project-expansion-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    SkillsBannerComponent,
    SkillsCardComponent,
    LogoCaptionComponent,
    ProjectsListComponent,
    ProjectExpansionPanelComponent,
    NavigationComponent
  ],
  imports: [
    // BrowserModule,
    HttpClientModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FontAwesomeModule,
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
