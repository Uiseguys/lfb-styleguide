import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {

  multiSelectData: any = ['Herr Muller', 'Frau Forster'];

  constructor() { }

  ngOnInit() {
  }

}
