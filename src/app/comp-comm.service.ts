import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompCommService {

  constructor() { }

  private subject = new Subject<any>();

    sendStuff(stuff: any) {
        this.subject.next(stuff);
    }

    getStuff(): Observable<any> {
        return this.subject.asObservable();
    }
}
