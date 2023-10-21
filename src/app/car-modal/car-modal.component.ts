import { Component } from '@angular/core';
import { CarModalService } from './car-modal.service';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.component.html',
  styleUrls: ['./car-modal.component.scss'],
})
export class CarModalComponent {
  selectedCar$ = this.carModalService.selectedCar$;
  constructor(private carModalService: CarModalService) {}

  closeModal(): void {
    this.carModalService.isCarModalOpen$.next(false);
  }
}
