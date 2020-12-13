import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProduitService} from "../../produit/service/produit.service";

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit , OnChanges {
  @Input() produit: any;
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

  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.produit) {
      this.form.name = this.produit.produit_name;
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
    if (this.produit) {
      return this.produitService.updateProduit(this.produit.produit_id, formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );

    } else {
      return this.produitService.createProduit(formData).subscribe(
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
    if (this.produit) {
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
    console.log(this.selectedFile);
  }

}
