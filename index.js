import { Component } from 'panel';

import buttonTemplate from './animal-button.jade';
import farmTemplate from './animal-farm.jade';

document.registerElement('animal-farm', class extends Component {
  get config() {
    return {
      defaultState: {
        buttons: ['llama', 'doge'],
        animals: ['angry bird'],
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
