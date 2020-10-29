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

  public genderSelect(param: any) {
    // Emit the selection of the user?
    // Or use the selection to navigate to the next view using the choice as navparams?
  }
}
