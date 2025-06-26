import { Component } from "@angular/core";
import { Imovel, ImovelService } from "../../services/imovel.service";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'app-listar-disponiveis',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './listar-disponiveis.component.html'
})
export class ListarDisponiveisComponent {

    imoveisDisponiveis: Imovel[] = [];

    constructor(private readonly imovelService: ImovelService) {}

    ngOnInit(): void {
        this.imovelService.listarDisponiveis().subscribe(imoveis => {
            this.imoveisDisponiveis = imoveis;
        });
    }

    getImagemPrincipal(imovel: Imovel): string | null {
        const imagem = imovel.fotos?.find(f => f.principal);
        return imagem ? imagem.urlArquivo : null;
    }

    iniciarVistoria(imovel: Imovel) {
        console.log("Iniciar vistoria para o imóvel:", imovel);
    }
}