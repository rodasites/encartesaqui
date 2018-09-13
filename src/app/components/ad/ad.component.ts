import { ContactDialogComponent } from './../../dialog/contact-dialog/contact-dialog.component';
import { AdDialogComponent } from './../../dialog/ad-dialog/ad-dialog.component';
import { Component, OnInit, Input } from '@angular/core';
import { Encarte } from '../../interfaces/encarte';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  public estabelecimento = {
    id: undefined,
    nome: undefined,
    endereco: undefined,
    numero: undefined,
    lat: undefined,
    lng: undefined
  }

  public anuncioFoco = undefined;

  @Input() encarte: Encarte;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.estabelecimento.id = this.encarte.idEstabelecimento;
  }

  openDialogEncarte(): void {
    let dialogRef = this.dialog.open(AdDialogComponent, {
      width: '50%',
      maxHeight: '700px',
      data: {id: this.encarte.id}
    });
    
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogContact(): void {
    let dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '50%',
      maxHeight: '700px',
      data: {estabelecimento: this.estabelecimento}
    });
    
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
  setFocoAnuncio(id){
    this.anuncioFoco = id;
  }

}
