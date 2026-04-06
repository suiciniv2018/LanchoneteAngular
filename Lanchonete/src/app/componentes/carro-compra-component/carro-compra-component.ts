import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from "../botaotopo-component/botaotopo-component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarroServiceIMGMarket } from '../../Services/Carro-ServiceLanchesIMG-Market';
import { CarrinhoService } from '../../Services/Carrinho-Service-Market';


@Component({
  selector: 'app-carro-compra-component',
  standalone:true,
  imports: [RouterLink, BotaotopoComponent,CommonModule,FormsModule],
  providers:[ CarroServiceIMGMarket,CarrinhoService],
  templateUrl: './carro-compra-component.html',
  styleUrls: ['./carro-compra-component.css'],
})

export class CarroCompraComponent implements OnInit {
isShown: boolean = false ||true;
  QuantidadeTotal: any;
  

//Variáveis para controle de exibição e armazenamento dos dados do serviço.  
toggleShow(): void {
  this.isShown = !this.isShown;
} 

CarneSelecionadoMercado: any;
itens: any [] = [];
total:number = 0;
item:any;
  

constructor(private CarrinhoService:CarrinhoService){
}

ngOnInit():void{
this.itens = this.CarrinhoService.listarItens();
this.total = this.CarrinhoService.getTotal();
 this.CarrinhoService.QuantidadeTotal$.subscribe((count: any)=> {
    this.QuantidadeTotal = count;
})
}

remover(id:number){
this.CarrinhoService.removerItem(id);
this.itens = this.CarrinhoService.listarItens();
this.total = this.CarrinhoService.getTotal();
}
alterarQuantidade(id:number,quantidade:number){
this.CarrinhoService.alterarQuantidade(id,quantidade);
this.total = this.CarrinhoService.getTotal();
}





//depois criar serviços e injeçoes de validação de login
  onLogin(form: any) {
    const { email, senha } = form.value;
  if (email === 'admin@teste.com' && senha === '1234') {
    alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha inválidos!');
    }
  } }