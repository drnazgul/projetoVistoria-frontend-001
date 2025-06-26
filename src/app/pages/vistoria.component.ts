import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-vistoria',
  imports: [CommonModule],
  templateUrl: './vistoria.component.html',
})

export class VistoriaComponent {

  private readonly route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
}
