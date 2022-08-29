import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
@Input() img:string = '';

@Output() loaded = new EventEmitter<string>();

imgDefault:string = "../../../assets/default-img.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded(){
    console.log('loaded');
    this.loaded.emit(this.img);
  }
}
