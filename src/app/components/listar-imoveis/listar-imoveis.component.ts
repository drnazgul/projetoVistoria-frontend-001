import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imovel, ImovelService } from '../../services/imovel.service';

@Component({
  selector: 'app-listar-imoveis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-imoveis.component.html'
})

export class ListarImoveisComponent {
  
  imoveis: Imovel[] = [];

  constructor(private imovelService: ImovelService) { }

  ngOnInit(): void {
    this.listarImoveis();  
  }

  listarImoveis() {
    this.imovelService.listar().subscribe(imoveis => {
      this.imoveis = imoveis;
    });
  }
}
