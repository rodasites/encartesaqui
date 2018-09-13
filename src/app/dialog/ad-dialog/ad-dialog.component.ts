import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-ad-dialog',
  templateUrl: './ad-dialog.component.html',
  styleUrls: ['./ad-dialog.component.css']
})
export class AdDialogComponent implements OnInit {

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

  public images = []

  public carouselOne: NguCarousel;

  public buttonLeftSelected = false;

  public buttonRigthSelected = false;

  constructor(
    public dialogRef: MatDialogRef<AdDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) { }

  ngOnInit() {
    this.getImages();
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      /* interval: 4000, */
      point: {
        visible: true,
      },
      load: 2,
      touch: true,
      loop: false,
      custom: 'banner'
    }
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }

 mouseLeftOn(){
  this.buttonLeftSelected = !this.buttonLeftSelected;
 }
 mouseRigthOn(){
  this.buttonRigthSelected = !this.buttonRigthSelected;
 }

 getImages(){
   for (let encarte of this.listaEncartes){
     if (encarte.id == this.data.id){
       this.images = encarte.imagens;
     }
   }
 }
   
}
