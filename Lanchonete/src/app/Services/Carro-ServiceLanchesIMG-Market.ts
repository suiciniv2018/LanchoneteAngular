import {Injectable} from'@angular/core';
import{ Produto } from '../Typscript/Modelo-Interface-Market';

@Injectable({
    providedIn:'root'
})
export class CarroServiceIMGMarket{
    
   private CarneSelecionadoMercado: Produto [] = [];
    
constructor(){}

 setCarnePremium():any{
    this.CarneSelecionadoMercado=[{
            id:0,
            nome:'Carne Premium',
            descricao:'Carne de alta qualidade, suculenta e saborosa, perfeita para churrascos e pratos especiais.',
            valor:49.99,
            Image:"assets/img/Xbacon.jpg",
        },
            {

            id:1,
            nome:'Carne Especial Argentina',
            descricao:'Carne de alta qualidade, suculenta e saborosa, perfeita para churrascos e pratos especiais.',
            valor:90.00,
            Image:"assets/img/XCheeder.jpg",
            },
            {
            id:2,
            nome:'Carne Americana Premium',
            descricao:'Carne de Angus Biff, feita em churrasqueira com ervas especiais, suculenta e saborosa.',
            valor:400.00,
            Image:"assets/img/XAmericana.jpg",
            },
        {
        id:3,
        nome:'Carne de Sol Premium',
        descricao:'Carne de sol de alta qualidade, suculenta e saborosa, perfeita para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
    {
        id:4,
        nome:'Carne de Panela Premium',
        descricao:'Carne de Panela de alta qualidade, suculenta e saborosa, perfeita para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
    {
        id:5,
        nome:'Carne de Largato Premium',
        descricao:'Carne de Panela de alta qualidade, suculenta e saborosa, perfeita para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
    {
    id:6,
        nome:'Carne de Largato Premium',
        descricao:'Carne de Panela de alta qualidade, suculenta e saborosa, perfeita para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
    {
        id:7,
        nome:'Carne de Largato Premium',
        descricao:'Carne de Panela de alta qualidade, suculenta e saborosa, perfeita para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },{
        id:8,
        nome:'Carne de Largato Premium',
        descricao:'Carne de Panela de alta qualidade, suculenta e saborosa, perfeita para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
    {
        id:9,
        nome:'Carne de Largato Premium',
        descricao:'Carne de Panela de alta qualidade, suculenta e saborosa, perfeita para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },

]};
getCarnePremiumAll():Produto[]{
    return this.CarneSelecionadoMercado;
}
// Método para obter um produto específico do mercado com base em seus atributos.
getCarnePremium(id: number): Produto | undefined {
    return this.CarneSelecionadoMercado.find(item => item.id === id);

  }

}

export class CarroServiceIMGMarketVegetariano{

 
    private VegetaSelecionadoMercado: Produto [] = [];
     
    setVegetariano():any{

    this.VegetaSelecionadoMercado=[{
            id:0,
            nome:'Vegetariano Premium',
            descricao:'Vegetariano de alta qualidade, suculento e saboroso, perfeito para churrascos e pratos especiais.',
            valor:49.99,
            Image:"assets/img/Xbacon.jpg",
        },
            {

            id:1,
            nome:'Vegetariano Especial Argentina',
            descricao:'Vegetariano de alta qualidade, suculento e saboroso, perfeito para churrascos e pratos especiais.',
            valor:90.00,
            Image:"assets/img/XCheeder.jpg",
            },
            {
            id:2,
            nome:'Vegetariano Americana Premium',
            descricao:'Vegetariano de Angus Biff, feito em churrasqueira com ervas especiais, suculento e saboroso  .',
            valor:400.00,
            Image:"assets/img/XAmericana.jpg",
            },
        {
        id:3,
        nome:'Vegetariano de Sol Premium',
        descricao:'Vegetariano de sol de alta qualidade, suculento e saboroso, perfeito para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },{
        id:4,
        nome:'Vegetariano de pepino Premium',
        descricao:'Vegetariano de sol de alta qualidade, suculento e saboroso, perfeito para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
    {
        id:5,
        nome:'Vegetariano de rucula Premium',
        descricao:'Vegetariano de sol de alta qualidade, suculento e saboroso, perfeito para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
       {
        id:6,
        nome:'Vegetariano de rucula Premium',
        descricao:'Vegetariano de sol de alta qualidade, suculento e saboroso, perfeito para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
       {
        id:7,
        nome:'Vegetariano de rucula Premium',
        descricao:'Vegetariano de sol de alta qualidade, suculento e saboroso, perfeito para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },
       {
        id:8,
        nome:'Vegetariano de rucula Premium',
        descricao:'Vegetariano de sol de alta qualidade, suculento e saboroso, perfeito para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    },

       {
        id:9,
        nome:'Vegetariano de rucula Premium',
        descricao:'Vegetariano de sol de alta qualidade, suculento e saboroso, perfeito para pratos nordestinos e churrascos.',
        valor:100.00,
        Image:"assets/img/XCarnesol.jpg",
    }
    

]};

getVegetarianoAll(): Produto[]{
    return this.VegetaSelecionadoMercado;
}
// Método para obter um produto específico do mercado com base em seus atributos.
 getVegetariano(id: number): Produto | undefined {
    // Método para obter um produto específico do mercado com base em seus atributos.
    return this.VegetaSelecionadoMercado.find(item => item.id === id);  }
 
 }



