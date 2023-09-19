import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent {
  @Input() isOpen!: boolean;
  @Input() selectedOption!: number | string;
  @Input() options!: (string | number)[];
  @Output() optionEmitter = new EventEmitter<any>();
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: number | string) {
    this.selectedOption = option;
    this.isOpen = false;
    this.optionEmitter.emit(this.selectedOption);
    this.toggleDropdown();
  }
}
