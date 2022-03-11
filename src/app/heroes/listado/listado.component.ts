import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  //Estas son las variables que podemos tomar en el HTML
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Doctor Strange', 'Capitán América', 'Black Widow']
  heroeBorrado: string = ''

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || ''
  }
}
