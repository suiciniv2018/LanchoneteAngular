import { Injectable } from "@angular/core";
import { Produto } from "../Typscript/Modelo-Interface-Market";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

private itens: { produto: Produto, quantidade: number }[] = [];

private TotalCarroIconesubject= new BehaviorSubject<number>(0);
QuantidadeTotal$ = this.TotalCarroIconesubject.asObservable();

  constructor() {
    this.carregarLocalStorage();
    this.AtualizaQuantidadeTotal();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private salvarLocalStorage() {
    if (!this.isBrowser()) return;
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  private carregarLocalStorage() {
    if (!this.isBrowser()) return;

    const dados = localStorage.getItem('carrinho');
    if (dados) {
      this.itens = JSON.parse(dados);
    }
  }

  private AtualizaQuantidadeTotal(){
    const QuantidadeTotal = this.itens.reduce((soma,item)=> soma + item.quantidade,0);
    this.TotalCarroIconesubject.next(QuantidadeTotal);
  }

  adicionarItem(produto: Produto): void {
    const itemExistente = this.itens.find(i => i.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }

    this.salvarLocalStorage();
    this.AtualizaQuantidadeTotal();
  }

  removerItem(id: number): void {
    this.itens = this.itens.filter(i => i.produto.id !== id);
    this.salvarLocalStorage();
    this.AtualizaQuantidadeTotal();
  }

  alterarQuantidade(id: number, quantidade: number): void {
    const item = this.itens.find(i => i.produto.id === id);
    if (item) {
      item.quantidade = quantidade;
      if (item.quantidade <= 0) {
        this.removerItem(id);
      }
    }
    this.salvarLocalStorage();
    this.AtualizaQuantidadeTotal();
  }

  listarItens() {
    return this.itens;
  }

  getTotal(): number {
    return this.itens.reduce((total, item) =>
      total + item.produto.valor * item.quantidade, 0
    );
  }

    
  }
