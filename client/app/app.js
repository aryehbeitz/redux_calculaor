import angular from 'angular';
import ngRedux from 'ng-redux';

import { storeConfig } from './storeConfig';
import { runDevTool } from './devToolConfig';

import appComponent from './components/app.component';
import myButton from './components/button/component';

import { CalculatorActions } from './reducers';

let app = angular.module('app', [
    ngRedux
    ]);

app
    .config(storeConfig)
    .run(runDevTool)
    .component('app', appComponent)
    .component('myButton', myButton)
    .factory('CalculatorActions', CalculatorActions)
;

angular.bootstrap(document, [app.name]);