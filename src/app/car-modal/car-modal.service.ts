import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarModalService {
  isCarModalOpen$ = new BehaviorSubject(false);
  selectedCar$ = new BehaviorSubject<any>(null);
}
