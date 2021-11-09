import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgIf, NgIfContext } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { refreshList } from './shared/reservas.service';
import { Reservas } from './shared/reservas';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  [x: string]: any;

  readonly baseUrl =''

  constructor(public service: ReservasComponent, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  povuarForm(selectedRecord: Reservas){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  public DataEntrada = "";
  public DataSaida = "";
  public QtdPessoa = "";
  public QtdCrianca = "";


  PequisarQuartos(){
    try{

      if(this.DataEntrada > this.DataSaida){

        alert("Por favor Data de entrada não pode ser maior que data de saida")
      }else{
        console.log();
        alert(refreshList());

      }

      console.log(this.DataEntrada < this.DataSaida);
      console.log(this.QtdPessoa + "\n"+ typeof this.QtdPessoa);
      console.log(parseInt(this.QtdPessoa) > 0);
    }catch(erro){
      alert("Erro no servidor Atualize a pagina")
      console.log(erro);

    }

  }



}


