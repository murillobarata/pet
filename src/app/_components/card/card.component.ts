import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/_models/pet';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  pet: Pet;

  constructor() { }

  ngOnInit(): void {
  }

}
