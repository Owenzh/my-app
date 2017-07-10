import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Furit } from '../../interfaces/Furit'
@Component({
    selector: 'furit-item',
    templateUrl: './furit.item.component.html',
    styleUrls: ['./furit.item.component.css'],
    providers: []
})
export class FuritItemComponent {
    @Input() furit: Furit;
    @Output() current: EventEmitter<any> = new EventEmitter();
    constructor() {

    }
    getFruitDetail($event, currentFuritItem: Furit) {
        console.log(currentFuritItem);
        this.current.emit(currentFuritItem.name);
    }
}