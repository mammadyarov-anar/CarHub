import { Component } from '@angular/core';
import { CarModalService } from './car-modal/car-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCarModalOpen$ = this.carModalService.isCarModalOpen$;

  constructor(private carModalService: CarModalService) {}
}
