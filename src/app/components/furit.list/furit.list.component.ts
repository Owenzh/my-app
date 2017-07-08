import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FuritService } from '../../services/furit.service';
import { Furit } from '../../interfaces/Furit';
import { FuritItemComponent } from '../furit.item/furit.item.component';
@Component({
    selector: 'furit-list',
    templateUrl: './furit.list.component.html',
    styleUrls: ['./furit.list.component.css'],
    providers: [FuritService]
})
export class FuritListComponent implements OnInit, AfterViewInit {
    furits: Furit[];
    constructor(private furitService: FuritService) {
    }
    @ViewChildren(FuritItemComponent) furitItemList: QueryList<Furit>;
    ngOnInit(): void {
        setTimeout(() => {
            this.furits = this.furitService.getFurits();
        }, 1500);
    }
    ngAfterViewInit() {
        console.log(this.furitItemList);
    }
}
