
import {Component} from 'angular2/core';
import {HelloWorld} from 'angular2-library-seed';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app',
    template: `<div>
                <hello-world></hello-world>
              </div>`,
    directives: [HelloWorld]
})
export class App {

}


bootstrap(App);