import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MarqueService} from '../service/marque.service';

@Component({
  selector: 'app-marque-create',
  templateUrl: './marque-create.component.html',
  styleUrls: ['./marque-create.component.css']
})
export class MarqueCreateComponent implements OnInit, OnChanges {
  @Input() marque: any;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public form = {
    name: null,
    selectedFile: null,
    etat: null
  };
  public error;
  public errors;
  public loading = false;
  // public selectedFile: File[] = null;
  public selectedFile: File = null;

  constructor(private marqueService: MarqueService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.marque) {
      this.form.name = this.marque.marque_name;
    }
  }


  public onSubmit(): any {
    this.loading = true;
    const formData: FormData = new FormData();
    /*
        const filesLength = this.selectedFile.length;
        for (let i = 0; i < filesLength; i++) {
          formData.append('selectedFile[]', this.selectedFile[i], this.selectedFile[i].name);
        }
    */

    formData.append('selectedFile', this.selectedFile, this.selectedFile.name);
    formData.append('name', this.form.name);
    formData.append('etat', 'true');
    if (this.marque) {
      return this.marqueService.updateMarque(this.marque.marque_id, formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    } else {
      return this.marqueService.createMarque(formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );


    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.form = {
      name: null, selectedFile: null, etat: true
    };
    if (this.marque) {
      return this.loadDataEdit.emit({});
    } else {
      return this.loadDataAjout.emit({});
    }
  }

  public handleError(error): any {
    console.log(error);
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  public onFileSelect(event): any {
    // this.selectedFile = <File[]>event.target.files;
    this.selectedFile = <File>event.target.files[0];
  }

}
