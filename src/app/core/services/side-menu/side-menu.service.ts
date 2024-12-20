import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  private toggleSubject = new Subject<boolean>();
  toggleState$ = this.toggleSubject.asObservable();

  constructor() {}

  emitToggleState(isOpen: boolean): void {
    this.toggleSubject.next(isOpen);
  }
}
