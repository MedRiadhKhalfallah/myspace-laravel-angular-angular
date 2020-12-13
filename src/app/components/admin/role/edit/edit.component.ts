import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() item; // decorate the property with @Input()
  public loading = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

  onSubmit(){

  }
}
