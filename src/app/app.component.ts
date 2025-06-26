import { Component, ViewChild } from '@angular/core';
import { ListarImoveisComponent } from './components/listar-imoveis/listar-imoveis.component';
import { ListarDisponiveisComponent } from "./components/listar-disponiveis/listar-disponiveis.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListarImoveisComponent, ListarDisponiveisComponent],
  template: `
    <app-listar-imoveis #listar></app-listar-imoveis>
    <hr />
    <app-listar-disponiveis></app-listar-disponiveis>
  `
})
export class AppComponent {

  @ViewChild('listar') listarImoveisComponent!: ListarImoveisComponent;

  carregarImoveis() {
    this.listarImoveisComponent.listarImoveis();
  }
}
