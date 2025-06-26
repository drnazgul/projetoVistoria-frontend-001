import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-detalhe-imovel',
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhe-imovel.component.html',
})
export class DetalheImovelComponent {

  private readonly route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
}
