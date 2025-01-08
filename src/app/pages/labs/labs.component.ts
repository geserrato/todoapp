import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [NgFor],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = [
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto',
    'Crear componentes',
  ];
  name: string = 'Gerardo';
  age: number = 33;
  disabled: boolean = false;
  img: string = 'https://w3schools.com/howto/img_avatar.png';
  person = {
    name: 'Gerardo',
    age: 33,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };
}
