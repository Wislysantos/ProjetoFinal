import { Reservas } from './reservas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})

export class ReservasService {

  constructor(private http: HttpClient) {
  }

  readonly baseURL = 'https://localhost:5001/api/quartos'
  //readonly baseURL = 'https://localhost:44377/api/quartos'
  formData: Reservas = new Reservas();
  list: Reservas[];
  valor: number;

  postReservas(){
    return this.http.post(this.baseURL, this.formData);
  }

  putReservas(){
    return this.http.put(`${this.baseURL}/${this.formData.quartoID}`, this.formData);
  }

  deleteReservas(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res =>this.list = res as Reservas[]);
  }

  getReservas(id: number){
    return this.http.get(`${this.baseURL}/${id}`)
  }

  pegarPreco(p : number) {
    this.valor = p  
   
 }

}


