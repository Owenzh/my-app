import { Component, OnInit } from '@angular/core';
import { FuritService } from '../../services/furit.service';
import { Furit } from '../../interfaces/Furit';
@Component({
    selector: 'furit-list',
    templateUrl: './furit.list.component.html',
    styleUrls: ['./furit.list.component.css'],
    providers: [FuritService]
})
export class FuritListComponent {
    furits: Furit[];
    constructor(private furitService: FuritService) {
    }
    ngOnInit(): void {
        this.furits = this.furitService.getFurits();
    }
}
