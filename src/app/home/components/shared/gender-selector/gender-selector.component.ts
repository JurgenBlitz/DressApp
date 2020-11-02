import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender-selector',
  templateUrl: './gender-selector.component.html',
  styleUrls: ['./gender-selector.component.scss'],
})
export class GenderSelectorComponent implements OnInit {

  @Output() genderSelection = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  // param can be a string ('m'/'f') or null
  public genderSelect(param: any) {
    // TODO: Animate the container to fade out of screen before emitting
    this.genderSelection.emit(param);
  }
}
