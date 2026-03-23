import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from "../botaotopo-component/botaotopo-component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria-component',
  standalone:true,
  imports: [RouterLink, BotaotopoComponent,FormsModule,CommonModule],
  templateUrl: './galeria-component.html',
  styleUrls: ['./galeria-component.css'],
})
export class GaleriaComponent {
  isShown = true; // controla exibição do offcanvas

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

