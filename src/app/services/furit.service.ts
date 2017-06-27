import { Injectable } from '@angular/core';
import { Furit } from '../interfaces/Furit';

@Injectable()
export class FuritService {
    private Furit: Furit[] = [
        { name: 'Apple', price: '3.5', picture: '/assets/imgs/apple.jpg' },
        { name: 'Banana', price: '3.5', picture: '/assets/imgs/banana.jpg' },
        { name: 'Orange', price: '3.5', picture: '/assets/imgs/orange.jpg' }
    ];
    getFurits(): Furit[] {
        return this.Furit;
    }
}