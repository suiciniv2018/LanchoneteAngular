import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-botaotopo-component',
  standalone:true,
  templateUrl: './botaotopo-component.html',
  styleUrls: ['./botaotopo-component.css'],
})
export class BotaotopoComponent {


  show = false;

  // escuta o scroll da página
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.show = window.scrollY > 200; // aparece após 200px de rolagem
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


