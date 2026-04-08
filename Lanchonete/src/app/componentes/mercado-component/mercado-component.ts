import{ CommonModule } from '@angular/common';
import{ Component, OnInit} from '@angular/core';
import{ Router, RouterLink } from '@angular/router';
import{ BotaotopoComponent } from "../botaotopo-component/botaotopo-component";
import{ FormsModule } from '@angular/forms';
import { CarroServiceIMGMarket, CarroServiceIMGMarketVegetariano } from '../../Services/Carro-ServiceLanchesIMG-Market';
import { CarrinhoService } from '../../Services/Carrinho-Service-Market';
import { Produto } from '../../Typscript/Modelo-Interface-Market';



@Component({
  selector: 'app-mercado-component',
  standalone:true,
  imports: [RouterLink, CommonModule, BotaotopoComponent, FormsModule],
  providers:[ CarroServiceIMGMarket, CarroServiceIMGMarketVegetariano,CarrinhoService],
  templateUrl: './mercado-component.html',
  styleUrls: ['./mercado-component.css'],
})

export class MercadoComponent implements OnInit {
  //Variável para controle de exibição de elementos na página.
  isShown: boolean = false ||true;
  QuantidadeTotal: any;
  CarneSelecionadoMercado: any;
itens: any [] = [];
total:number = 0;
item:any;
VegetaSelecionadoMercado: any;
  CarrinhoService: any;
  
  
//Fim Variáveis para controle de exibição e armazenamento dos dados do serviço.

//Variáveis para controle de exibição e armazenamento dos dados do serviço.  
toggleShow(): void {
  this.isShown = !this.isShown;
} 

//Injeção do serviço e do roteador para navegação.    
constructor(private carroService:CarroServiceIMGMarket, 
  private carroServiceVeg:CarroServiceIMGMarketVegetariano,
  private carrinhoService:CarrinhoService,
   private router:Router) {}
//Fim Injeção do serviço e do roteador para navegação.

ngOnInit(): void {
  this.carroService.setCarnePremium();
  this.CarneSelecionadoMercado = this.carroService.getCarnePremiumAll();

  this.carroServiceVeg.setVegetariano();
  this.VegetaSelecionadoMercado = this.carroServiceVeg.getVegetarianoAll();

  this.itens = this.carrinhoService.listarItens();
  this.total = this.carrinhoService.getTotal();

  this.carrinhoService.QuantidadeTotal$.subscribe((count: any) => {
    this.QuantidadeTotal = count;
  });
}

remover(id: number) {
  this.carrinhoService.removerItem(id);
  this.itens = this.carrinhoService.listarItens();
  this.total = this.carrinhoService.getTotal();
}

alterarQuantidade(id: number, quantidade: number) {
  this.carrinhoService.alterarQuantidade(id, quantidade);
  this.total = this.carrinhoService.getTotal();
}

Comprar(produto: Produto): void {
  this.carrinhoService.adicionarItem(produto);
  this.router.navigate(['/carro-compra']);
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
