import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from "../botaotopo-component/botaotopo-component";

@Component({
  selector: 'app-cardapio-component',
  imports: [CommonModule, FormsModule, RouterLink, BotaotopoComponent],
  templateUrl: './cardapio-component.html',
  styleUrls: ['./cardapio-component.css'],
})
export class CardapioComponent {
isShown: boolean = false ||true;
  CarrinhoService: any;
  QuantidadeTotal = 0;

//Variáveis para controle de exibição e armazenamento dos dados do serviço.  
toggleShow(): void {
  this.isShown = !this.isShown;
} 

  constructor() {
    // inicializações simples
  }

  ngOnInit(): void {
 this.CarrinhoService.QuantidadeTotal$.subscribe((count: any)=> {
    this.QuantidadeTotal = count;
    })
  }

  onLogin(form: any) {
    const { email, senha } = form.value;

    // Exemplo simples de validação
    if (email === 'admin@teste.com' && senha === '1234') {
      alert('Login realizado com sucesso!');
      // aqui você pode salvar token, redirecionar, etc.
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
}


