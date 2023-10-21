import { Component } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss'],
})
export class CarCardsComponent {
  cars$ = this.carService.cars$;
  constructor(private carService: CarService) {}
}
