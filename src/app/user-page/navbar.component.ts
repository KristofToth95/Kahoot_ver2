import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-navigation',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private _document: Document) { }

  activeList(id: number) {
    let list = this._document.querySelectorAll('.list');
    for (let i = 0; i < list.length; i++) {
      let j = 0;
      while (j < list.length) {
        list[j++].className = 'list';
      }
      list[id].className='list active';
    }
  }

}
