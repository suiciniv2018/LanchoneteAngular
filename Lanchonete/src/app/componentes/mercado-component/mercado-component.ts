
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotaotopoComponent } from "../botaotopo-component/botaotopo-component";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-mercado-component',
  standalone:true,
  imports: [RouterLink, CommonModule, BotaotopoComponent, FormsModule],
  templateUrl: './mercado-component.html',
  styleUrls: ['./mercado-component.css'],
 

})
export class MercadoComponent {

isShown = true; //  verdadeiro/falso  encapsulamento login/canvas "controlador"

  constructor() {
    // inicializações simples
  }

  ngOnInit(): void {
    // chamado após o construtor
    // aqui você pode inicializar dados, chamar serviços, etc.
    console.log('LoginComponent inicializado!');
  }

//depois criar serviços e injeçoes de validação de login

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


