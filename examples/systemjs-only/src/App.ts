
//import 'reflect-metadata';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {HelloWorld} from 'angular2-library-example/components';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';



@Component({
    selector: 'app',
    directives: [HelloWorld],
    pipes: [TranslatePipe],
    template: `<input placeholder="Type Hello World!" (keyup)="onKeyUp(input)" #input>
               {{message}}
               <hello-world></hello-world>
               `
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}

bootstrap(App,[TranslateService]);