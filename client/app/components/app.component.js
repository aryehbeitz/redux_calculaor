import template from './app.template.html';
import { CalculatorActions } from '../reducers';
import buttons from './buttons';
class controller {
    constructor($ngRedux, CalculatorActions) {
        'ngInject';

        this.store = $ngRedux;
        this.CalculatorActions = CalculatorActions;
        this.numbers = buttons.numbers;
        this.operators = buttons.operators;
    }
    $onInit() {
        const actions = Object.assign({}, this.CalculatorActions);
        this.unsubscribe = this.store.connect(this.mapStateToThis, actions)(this);
    }
    $onDestroy() {
        this.unsubscribe();
    }
    mapStateToThis(state) {
    return {
      totalSum: state.totalSum,
      currentOperator: state.currentOperator
    };
  }

}

const appComponent = {
    template,
    controller
};
export default appComponent;