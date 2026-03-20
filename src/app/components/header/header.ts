import { Component, Host, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const mudar = document.querySelector('.sidebar')?.classList.toggle('isOpen', this.isOpen);
    return mudar;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement;

  if (this.isOpen && !target.closest('.sidebar')) {
    this.toggleMenu();
  }
}
}
