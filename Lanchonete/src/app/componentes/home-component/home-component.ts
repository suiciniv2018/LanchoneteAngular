import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from "../botaotopo-component/botaotopo-component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLink, BotaotopoComponent, CommonModule, FormsModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css'],

})

export class HomeComponent {
  //Variável para controle de exibição de elementos na página.
  isShown: boolean = false ||true;

//Variáveis para controle de exibição e armazenamento dos dados do serviço.  
toggleShow(): void {
  this.isShown = !this.isShown;
} 

  ngOnInit(): void {
    console.log('HomeComponent inicializado!');
  }

//depois criar serviços e injeçoes de validação de login
  onLogin(form: any) {
    const { email, senha } = form.value;

    if (email === 'admin@teste.com' && senha === '1234') {
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
}