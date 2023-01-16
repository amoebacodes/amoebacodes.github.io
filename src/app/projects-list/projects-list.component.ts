import { Component, OnInit } from '@angular/core';
import { CompCommService } from '../comp-comm.service';
import { HttpClient } from '@angular/common/http';
import { IProjectDesc } from 'src/app/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projectFileNames:string[] = [
    'thisweb.json',
    'ginkgo.json',
    'helomics.json',
    'qpcr.json',
    'social.json',
    'jeopardy.json',
    'icc.json',
    'cancer.json',
    'ftu.json',
    'axon.json',
  ]
  projects: IProjectDesc[] = [];
  projObs = new Observable<IProjectDesc[]>((observer) => {
    observer.next(this.projects)
  })
  filteredProjects: IProjectDesc[] = [];

  selectedTags: string[]; 

  constructor(private compCommService: CompCommService, private http: HttpClient) { }
  
  
  getTags(): void {
    for (let i in this.projectFileNames){
      this.http.get('assets/files/'+ this.projectFileNames[i]).
        subscribe((data:any) => {
          if (data) {
            let project: IProjectDesc = data
            this.projects.push(project)
          }
        });
    }
  }

  ngOnInit(): void {
    this.getTags()
    let projObserver = this.projObs.subscribe((projs: IProjectDesc[]) => {
      if (projs){
        this.filteredProjects = projs
        this.compCommService.getStuff().subscribe((data) => {
          if (data) {
          this.selectedTags = data;
          this.filteredProjects = [];
          for (let i in this.projects) {
            if (this.selectedTags.length == 0){
              this.filteredProjects = projs
            } else if (this.selectedTags.every(el => this.projects[i].tags.includes(el))) {
              this.filteredProjects.push(this.projects[i])
            }
          }
        }})
      }
      
    })    
  }

}
