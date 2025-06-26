import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// src/app/services/imovel.service.ts
export interface Imovel {
  id?: number;
  codigoImovel: number;
  tituloImovel: string;
  tipoImovel: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  condominio: string;
  precoVenda: number;
  precoCondominio: number;
  latitude: number;
  longitude: number;
  qtdDormitorios: number;
  qtdSuites: number;
  qtdBanheiros: number;
  qtdSalas: number;
  qtdVagas: number;
  dataCadastro: string;
  dataAlteracaoImovel: string;
  ativo: boolean;
  observacao: string;
  valorIptu: number;
  fotos: { id: number; urlArquivo: string; principal: boolean }[];
  caracteristicas: { id: number; nome: string; ativo: boolean }[];
}


@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  private readonly apiUrl = 'http://localhost:8080/api/imoveis';
  

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(this.apiUrl);
  }

  salvar(imovel: Imovel): Observable<Imovel> {
    return this.http.post<Imovel>(this.apiUrl, imovel);
  }

  listarDisponiveis(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(`${this.apiUrl}/disponiveis`);
  }
}
