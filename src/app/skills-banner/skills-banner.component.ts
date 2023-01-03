import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-banner',
  templateUrl: './skills-banner.component.html',
  styleUrls: ['./skills-banner.component.css']
})
export class SkillsBannerComponent implements OnInit {
  programming: string = 'Programming';
  ai_ml: string = 'AI & ML';
  automation: string = 'Experimentation\nAutomation';
  constructor() { }

  ngOnInit(): void {
    
  }

}
