import { Component, Input } from '@angular/core';
import { CarModalService } from '../car-modal/car-modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() car: any = null;
  constructor(private carModalService: CarModalService) {}

  openCarModal(): void {
    this.carModalService.isCarModalOpen$.next(true);
    this.carModalService.selectedCar$.next(this.car);
  }

  getTransmissionText(transmissionType: string): string {
    if (transmissionType === 'a') {
      return 'Automatic';
    } else {
      return transmissionType;
    }
  }
}
