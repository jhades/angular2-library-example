import 'zone.js/dist/zone';
import 'reflect-metadata';

import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HelloWorld} from 'angular2-library-example/components';


@Component({
    selector: 'app',
    directives: [HelloWorld],
    template: `<div>
                   <input (keyup)="onKeyUp(input)" #input placeholder="Type Here">
                   {{message}}
                   <hello-world></hello-world>
               </div>`
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}


bootstrap(App);
