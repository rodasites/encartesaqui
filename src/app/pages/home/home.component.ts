import { Component, OnInit } from '@angular/core';
import { Encarte } from '../../interfaces/encarte';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public encartes: Encarte[];

  listaEncartes = [
    {
      id: '1',
      idEstabelecimento: '1',
      imagens: ['assets/img/encartes/01.jpg', 'assets/img/encartes/02.jpg'],
     
    },
    {
      id: '2',
      idEstabelecimento: '2',
      imagens: ['assets/img/encartes/03.jpg', 'assets/img/encartes/04.jpg'],
     
    },
    {
      id: '3',
      idEstabelecimento: '3',
      imagens: ['assets/img/encartes/05.jpg', 'assets/img/encartes/06.jpg'],
      
    },
    {
      id: '4',
      idEstabelecimento: '4',
      imagens: ['assets/img/encartes/07.jpg', 'assets/img/encartes/08.jpg'],

    },
    {
      id: '5',
      idEstabelecimento: '5',
      imagens: ['assets/img/encartes/09.jpg', 'assets/img/encartes/10.jpg'],
     
    },
    {
      id: '6',
      idEstabelecimento: '6',
      imagens: ['assets/img/encartes/11.jpg', 'assets/img/encartes/12.jpg'],
     
    },
    {
      id: '7',
      idEstabelecimento: '7',
      imagens: ['assets/img/encartes/13.jpg', 'assets/img/encartes/14.jpg'],
    
    },
    {
      id: '8',
      idEstabelecimento: '8',
      imagens: ['assets/img/encartes/15.jpg', 'assets/img/encartes/16.jpg'],
    
    },
    {
      id: '9',
      idEstabelecimento: '9',
      imagens: ['assets/img/encartes/17.jpg', 'assets/img/encartes/18.jpg'],
    
    },
    {
      id: '10',
      idEstabelecimento: '10',
      imagens: ['assets/img/encartes/19.jpg', 'assets/img/encartes/20.jpg'],
    
    },
    {
      id: '11',
      idEstabelecimento: '11',
      imagens: ['assets/img/encartes/21.jpg', 'assets/img/encartes/22.jpg'],
     
    },
    {
      id: '12',
      idEstabelecimento: '12',
      imagens: ['assets/img/encartes/23.jpg', 'assets/img/encartes/24.jpg'],

    },
    {
      id: '13',
      idEstabelecimento: '13',
      imagens: ['assets/img/encartes/25.jpg', 'assets/img/encartes/26.jpg'],
    
    },
  ]

  constructor() { }

  ngOnInit() {
    this.getEncartes()
  }

  public getEncartes() {
    this.encartes = this.listaEncartes
  }

}
