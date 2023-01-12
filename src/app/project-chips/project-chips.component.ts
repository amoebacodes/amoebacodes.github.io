import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CompCommService } from '../comp-comm.service';

@Component({
  selector: 'app-project-chips',
  templateUrl: './project-chips.component.html',
  styleUrls: ['./project-chips.component.css']
})
export class ProjectChipsComponent implements OnInit {
  faTimes = faTimes;

  separatorKeysCodes: number[] = [];
  tagCtrl = new FormControl('');
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['Deep Learning', 
                      'Software Development', 
                      'Full-stack Development', 
                      'Front-end Development', 
                      'Computer Vision', 
                      'Natural Language Processing',
                      'Database Management',
                      'UI/UX Design',
                      'Automation',
                    ];

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  constructor(private compCommService: CompCommService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
    );
  }

  ngOnInit(): void {
    
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.allTags.push(tag);

      this.tagCtrl.setValue(null); 

      this.compCommService.sendStuff(this.tags)
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);

    var index = this.allTags.indexOf(event.option.viewValue);
    this.allTags.splice(index, 1)

    this.compCommService.sendStuff(this.tags)

    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }
}