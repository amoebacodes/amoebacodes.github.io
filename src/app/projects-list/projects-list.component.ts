import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projectFileNames:string[] = [
    'thisweb.json',
    'helomics.json',
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

}
