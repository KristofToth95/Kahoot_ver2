import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent{

  constructor(private router: Router, @Inject(DOCUMENT) private _document: Document) { }

  activeList(){
    let list = this._document.querySelectorAll('.list');
    for(let i = 0; i < list.length; i++){
      list[i].addEventListener("click", function() {
        let j = 0;
        while(j < list.length){
          list[j++].className = 'list active';
        }
      })
    }
  }

}
