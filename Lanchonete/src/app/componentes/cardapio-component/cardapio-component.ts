import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from "../botaotopo-component/botaotopo-component";
import { CarroServiceIMGMarket } from '../../Services/Carro-ServiceLanchesIMG-Market';
import { CarrinhoService } from '../../Services/Carrinho-Service-Market';

@Component({
  selector: 'app-cardapio-component',
  imports: [CommonModule, FormsModule, RouterLink, BotaotopoComponent],  
    providers:[ CarroServiceIMGMarket,CarrinhoService],
  
  templateUrl: './cardapio-component.html',
  styleUrls: ['./cardapio-component.css'],
})
export class CardapioComponent {
isShown: boolean = false ||true;
  QuantidadeTotal: any;
  CarneSelecionadoMercado: any;
itens: any [] = [];
total:number = 0;
item:any;
  

//Variáveis para controle de exibição e armazenamento dos dados do serviço.  
toggleShow(): void {
  this.isShown = !this.isShown;
} 

constructor(private CarrinhoService:CarrinhoService){
}

  ngOnInit(): void {
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
  }}