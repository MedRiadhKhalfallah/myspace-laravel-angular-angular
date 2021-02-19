import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-roue-chance-view',
  templateUrl: './roue-chance-view.component.html',
  styleUrls: ['./roue-chance-view.component.css']
})
export class RoueChanceViewComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
/*
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/roue/script.js";
    this.elementRef.nativeElement.appendChild(s);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/roue/ThrowPropsPluginn.min.js";
    this.elementRef.nativeElement.appendChild(s);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/roue/ajax/TextPlugin.min.js";
    this.elementRef.nativeElement.appendChild(s);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/roue/ajax/Draggable.min.js";
    this.elementRef.nativeElement.appendChild(s);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/roue/ajax/TweenMax.min.js";
    this.elementRef.nativeElement.appendChild(s);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/roue/pen/bbc103e987315728a1190a25753c00e1.js";
    this.elementRef.nativeElement.appendChild(s);
*/
  }

}
