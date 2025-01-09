import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [NgFor],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto',
    'Crear componentes',
    'Signal',
  ]);
  name = signal('Gerardo');
  age: number = 33;
  disabled: boolean = false;
  img: string = 'https://w3schools.com/howto/img_avatar.png';
  person = {
    name: 'Gerardo',
    age: 33,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;

    // Para modificar el valor de la señal name se utiliza el método set
    this.name.set(newValue);
  }

  keyDownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
