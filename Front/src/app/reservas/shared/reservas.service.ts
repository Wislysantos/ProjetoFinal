import { Reservas } from './reservas';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})

export class ReservasService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/Quartos'
  formData: Reservas= new Reservas();
  list!: Reservas[];

  postReservas(){
    return this.http.post(this.baseURL, this.formData);
  }

  putReservas(){
    return this.http.put(`${this.baseURL}/${this.formData.quartoID}`, this.formData);
  }

  deleteReservas(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  public refreshList(){
    this.http.get(this.baseURL).toPromise().then(res =>this.list = res as Reservas[]);
  }

}
export function refreshList(): any {
  throw new Error('Function not implemented.');
}

