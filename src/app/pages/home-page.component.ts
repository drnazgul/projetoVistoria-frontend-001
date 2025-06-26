import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImovelService, Imovel } from '../services/imovel.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private readonly imovelService = inject(ImovelService);
  ultimosImoveis: Imovel[] = [];

  ngOnInit(): void {
    this.imovelService.listarDisponiveis().subscribe(imoveis => {
      this.ultimosImoveis = imoveis
        .sort((a, b) => new Date(b.dataCadastro).getTime() - new Date(a.dataCadastro).getTime())
        .slice(0, 5);
    });
  }

  getImagemPrincipal(imovel: Imovel): string | null {
    const imagem = imovel.fotos?.find(f => f.principal);
    return imagem ? imagem.urlArquivo : null;
  }
}