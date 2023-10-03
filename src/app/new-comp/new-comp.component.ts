import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCompComponent {
  
  @Input()
  rowData: any = {}

  @Input()
  index: number = 0

  @Output()
  dlt: EventEmitter<number>= new EventEmitter;

  onDelete():void{
    this.dlt.emit(this.index)
  }
}
