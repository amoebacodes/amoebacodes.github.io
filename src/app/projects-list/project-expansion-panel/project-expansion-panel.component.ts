import { Component, Input, OnInit } from '@angular/core';
import { IProjectDesc } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-expansion-panel',
  templateUrl: './project-expansion-panel.component.html',
  styleUrls: ['./project-expansion-panel.component.css']
})
export class ProjectExpansionPanelComponent implements OnInit {
  project: IProjectDesc = {
    title:'', 
    link:'', 
    summary:'',
    description:'', 
    tags:[]
  }
  @Input() filename: string;
  @Input() i: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/files/'+this.filename).
      subscribe((data:any) => {
        if (data) {
          this.project = data; 
          document.getElementById("link"+this.i.toString())?.setAttribute('href', data.link)
        }
      });
  }

}
