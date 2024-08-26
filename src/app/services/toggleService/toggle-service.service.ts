import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleServiceService {
  private formVisibilitySource = new BehaviorSubject<boolean>(false);
  formVisibility$ = this.formVisibilitySource.asObservable();

  toggleFormVisibility() {
    this.formVisibilitySource.next(!this.formVisibilitySource.value);
  }

  setFormVisibility(visible: boolean) {
    this.formVisibilitySource.next(visible);
  }
}
