import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {RoueChanceElementService} from "../service/roue-chance-element.service";
export interface ElementType {
  id: number,
  value: string,
  win: string,
  resultText: string,
  color: string,
}

@Component({
  selector: 'app-roue-chance-element-create',
  templateUrl: './roue-chance-element-create.component.html',
  styleUrls: ['./roue-chance-element-create.component.css']
})
export class RoueChanceElementCreateComponent implements OnInit {

  @Input() element: ElementType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();
  public error;
  public errors;
  public loading = false;

  constructor(private elementService: RoueChanceElementService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    if (!this.element) {
      this.element = new class implements ElementType {
        color: string;
        id: number;
        resultText: string;
        value: string;
        win: string;
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
  }


  public onSubmit(): any {
    this.loading = true;
    if (this.element.id) {
      return this.elementService.updateRoueElement(this.element).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    } else {
      return this.elementService.createRoueElement(this.element).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );


    }
  }

  public handleResponse(data): any {

    this.loading = false;
    this.error = null;
    this.errors = null;

    if (this.element.id) {
      this.toastr.success('element modifié avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      return this.loadDataEdit.emit();
    } else {
      this.toastr.success('element ajouté avec succée', 'Opération effectuée avec succès',
        {
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      return this.loadDataAjout.emit();
    }

  }

  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
