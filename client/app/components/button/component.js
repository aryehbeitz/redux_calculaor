import template from './template.html';

class controller {

}

const component = {
    bindings: {
        // def model: {name, action}
        name: '<',
        action: '=?'
    },
    template,
    controller
};

export default component;