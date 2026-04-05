import{ CommonModule } from '@angular/common';
import{ Component, OnInit} from '@angular/core';
import{ Router, RouterLink } from '@angular/router';
import{ BotaotopoComponent } from "../botaotopo-component/botaotopo-component";
import{ FormsModule } from '@angular/forms';
import { CarroServiceIMGMarket, CarroServiceIMGMarketVegetariano } from '../../Services/Carro-ServiceLanchesIMG-Market';
import { Produto } from '../../Typscript/Modelo-Interface-Market';
import { CarrinhoService } from '../../Services/Carrinho-Service-Market';



@Component({
  selector: 'app-mercado-component',
  standalone:true,
  imports: [RouterLink, CommonModule, BotaotopoComponent, FormsModule],
  providers:[ CarroServiceIMGMarket, CarroServiceIMGMarketVegetariano],
  templateUrl: './mercado-component.html',
  styleUrls: ['./mercado-component.css'],
 

})
export class MercadoComponent implements OnInit {
  //Variável para controle de exibição de elementos na página.
  isShown: boolean = false ||true;
  VegetaSelecionadoMercado: any;
  CarneSelecionadoMercado: any;
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

//Método para inicialização do componente, onde é chamado o serviço para obter os dados dos produtos do mercado.
  ngOnInit():void{
    this.carroService.setCarnePremium();//chama o serviço para obter os dados dos produtos do mercado.
    this.CarneSelecionadoMercado = this.carroService.getCarnePremiumAll();//chama o serviço para obter os dados dos produtos do mercado
    
    this.carroServiceVeg.setVegetariano();//chama o serviço para obter os dados dos produtos do mercado.   
    this.VegetaSelecionadoMercado = this.carroServiceVeg.getVegetarianoAll();//chama o serviço para obter a imagem do carro.ServiceIMG-Market.ts


}
//fim Método para inicialização do componente, onde é chamado o serviço para obter os dados dos produtos do mercado.

//Método para navegação para a página de compra ao clicar no botão "Comprar".
Comprar(produto: Produto): void{
  this.carrinhoService.adicionarItem(produto); 
  this.router.navigate(['/carro-compra'])
}
//fim Método para navegação para a página de compra ao clicar no botão "Comprar".

//Método para controle de exibição de elementos na página, alternando o valor da variável isShown.
onLogin(form: any) {
   const { email, senha } = form.value;
    if (email === 'admin@teste.com' && senha === '1234') {
    alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }}
