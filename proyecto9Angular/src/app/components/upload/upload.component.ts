import { Component, OnInit, Output } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Output() eventPhoto = new EventEmitter();

  constructor(private enviandoImagen : UploadService) { }

  ngOnInit() {
  }

  sendName(){

    this.eventPhoto.emit('paco');
  }


		public cargandoImagen(event){

      let elemento = event.target;

      console.log(event);

      // if(elemento.files.length>0){
      //   let formData= new FormData();
      //   formData.append('file', elemento.files[0]);
      //   this.enviandoImagen.postFileImagen(formData)
      //   .subscribe((data)=>{
      //     let res = data;
      //   }, (error)=> console.log(error.message));
      // }

    }

}
