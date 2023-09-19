import { Component } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-catalogue',
  templateUrl: './car-catalogue.component.html',
  styleUrls: ['./car-catalogue.component.scss'],
})
export class CarCatalogueComponent {
  isCarOptionsOpen = false;
  isOpen = false;
  selectedCarOption = '';
  carOptions = [
    'Audi',
    'Bentley ',
    'Bmw',
    'Cadillac',
    'Chrysler',
    'Citroen',
    'Dodge',
    'Ferrari',
    'Fiat',
    'Ford',
    'GMC',
    'Honda',
    'Hyundai',
    'Infiniti',
    'Jaguar',
    'Jeep',
    'Kia',
    'Lamborghini',
    'Land Rover',
    'Lexus',
    'Lincoln',
    'Maserati',
    'Mazda',
    'McLaren',
    'Mercedes-Benz',
    'MINI',
    'Mitsubishi',
    'Nissan',
    'Porsche',
    'Ram',
    'Rolls-Royce',
    'Subaru',
    'Tesla',
    'Volkswagen',
    'Volvo',
  ];
  carModel = '';
  carYear = null;
  carFuel = '';

  constructor(private carService: CarService) {}

  toggleDropdown() {
    this.isCarOptionsOpen = !this.isCarOptionsOpen;
  }

  selectOption(car: string) {
    this.selectedCarOption = car;
  }

  search(): void {
    console.log(
      this.carModel,
      this.carFuel,
      this.carYear,
      this.selectedCarOption
    );
    this.carService.getCars(null).subscribe((res) => console.log(res));
  }

  getYear(year: any) {
    console.log(year);
    this.carYear = year;
  }

  getFuel(fuel: any) {
    this.carFuel = fuel;
    console.log(fuel);
  }
}
