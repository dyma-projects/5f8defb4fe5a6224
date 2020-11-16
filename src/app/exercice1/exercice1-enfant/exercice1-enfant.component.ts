import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur: number;
  @Output() public newEventItem: EventEmitter<any> = new EventEmitter();

  constructor () { }

  ngOnInit() {
  }

  plus(): void {
    this.compteur++;
    this.envoiEvent();
  }

  moins(): void {
    this.compteur--;
    this.envoiEvent();
  }

  envoiEvent() {

    this.newEventItem.emit(this.compteur);

  }

}