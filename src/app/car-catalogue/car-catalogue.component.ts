import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-catalogue',
  templateUrl: './car-catalogue.component.html',
  styleUrls: ['./car-catalogue.component.scss'],
})
export class CarCatalogueComponent implements OnInit {
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
  carYear = 2023;
  carFuel = '';

  constructor(private carService: CarService) {}
  ngOnInit(): void {
    this.search();
  }

  toggleDropdown() {
    this.isCarOptionsOpen = !this.isCarOptionsOpen;
  }

  selectOption(car: string) {
    this.selectedCarOption = car;
  }

  search(): void {
    const params = {
      model: this.carModel,
      make: this.selectedCarOption,
      year: this.carYear,
      fuel_type: this.carFuel,
    };
    this.carService.getCars(params).subscribe((res) => {
      this.carService.cars$.next(res);
    });
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
