import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from "../botaotopo-component/botaotopo-component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarroServiceIMGMarket, CarroServiceIMGMarketVegetariano } from '../../Services/Carro-ServiceLanchesIMG-Market';

@Component({
  selector: 'app-galeria-component',
  standalone:true,
  imports: [RouterLink, BotaotopoComponent,FormsModule,CommonModule],
    providers:[ CarroServiceIMGMarket, CarroServiceIMGMarketVegetariano],
  templateUrl: './galeria-component.html',
  styleUrls: ['./galeria-component.css'],
})
export class GaleriaComponent {
    //Variável para controle de exibição de elementos na página.
  isShown: boolean = false ||true;

//Variáveis para controle de exibição e armazenamento dos dados do serviço.  
toggleShow(): void {
  this.isShown = !this.isShown;
} 

  constructor() {
    // inicializações simples
  }

  ngOnInit(): void {
    // chamado após o construtor
    // aqui você pode inicializar dados, chamar serviços, etc.
    console.log('LoginComponent inicializado!');
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

