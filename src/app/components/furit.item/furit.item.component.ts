import { Component, Input } from '@angular/core';
import { Furit } from '../../interfaces/Furit'
@Component({
    selector: 'furit-item',
    templateUrl: './furit.item.component.html',
    styleUrls: ['./furit.item.component.css'],
    providers: []
})
export class FuritItemComponent {
    @Input() furit: Furit;
    constructor() {

    }
}