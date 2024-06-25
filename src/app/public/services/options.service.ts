import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private updateOptionsSource = new Subject<void>();
  updateOptions$ = this.updateOptionsSource.asObservable();

  requestUpdateOptions() {
    this.updateOptionsSource.next();
  }
}
