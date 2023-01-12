import { Component, Input, OnInit } from '@angular/core';
import { IProjectDesc } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-expansion-panel',
  templateUrl: './project-expansion-panel.component.html',
  styleUrls: ['./project-expansion-panel.component.css']
})
export class ProjectExpansionPanelComponent implements OnInit {
  @Input() project: IProjectDesc;
  @Input() i: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
