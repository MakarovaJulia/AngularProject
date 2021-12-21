import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() theme: 'PRIMARY' | 'SECONDARY' | 'THIRD' = 'PRIMARY';
  @Input() type: 'submit' | 'button' | 'reset' = 'button';


  constructor() { }

  ngOnInit(): void {
  }

}
