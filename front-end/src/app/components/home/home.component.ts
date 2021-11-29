import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _serviceFotografias:FotografiasService) {

  }

  ngOnInit(): void {
    this.getFotografias();
  }
  //Servicio de fetch del servidor backEnd Fotografias
  getFotografias(){
    this._serviceFotografias.getFotografias()
    .then(response=>{
      this.fotografias=response.fotografias;
      console.log(this.fotografias); //Chequeo que jala del back
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
