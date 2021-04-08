import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/_models/pet';

@Component({
  selector: 'app-available-pets',
  templateUrl: './available-pets.component.html',
  styleUrls: ['./available-pets.component.scss']
})
export class AvailablePetsComponent implements OnInit {

  pets: Pet[] = [
    { name: 'Xoxou', description: 'Cachorro manso', available: true },
    { name: 'Pretinha', description: 'Pintcher valente' , available: true },
    { name: 'Leo', description: 'Salsicha invocado', available: false  },
    { name: 'Emma', description: 'Cachorrinha mágica', available: true  },
    { name: 'Watson', description: 'Cachorro inteligente', available: false  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
