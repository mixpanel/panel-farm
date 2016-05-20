import { Component } from 'panel';

import farmTemplate from './animal-farm.jade';
import buttonTemplate from './animal-button.jade';

document.registerElement('animal-farm', class extends Component {
  get config() {
    return {
      defaultState: {
        animals: [],
        buttons: ['llama', 'doge'],
      },
      template: farmTemplate,
    };
  }
});

document.registerElement('animal-button', class extends Component {
  get config() {
    return {
      helpers: {
        addAnimal: () => this.update({animals: this.state.animals.concat(this.animal)}),
      },
      template: buttonTemplate,
    };
  }

  get animal() {
    return this.getAttribute('animal');
  }
});
