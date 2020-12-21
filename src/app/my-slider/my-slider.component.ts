import { Component, OnInit, Input } from '@angular/core';
import { Options } from "ng5-slider";

@Component({
  selector: 'app-my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.css']
})
export class MySliderComponent implements OnInit {
  @Input() name="";
  @Input() value=0;
  options:Options;
  constructor() {   }

  ngOnInit() {
    this.options = {
      floor: 0,
      ceil: 100,
      minLimit: this.value,
      noSwitching: true,
      showSelectionBarFromValue: this.value,
      ticksArray: [this.value-2, 100]
    };
  }

}
