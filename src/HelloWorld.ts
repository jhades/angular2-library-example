
import {Component} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'hello-world',
    encapsulation: ViewEncapsulation.Emulated,
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<h1 (click)="onClick()">{{message}}</h1>`
})
export class HelloWorld {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);

    }

}