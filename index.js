import { Component } from 'panel';

import buttonTemplate from './animal-button.jade';
import zooTemplate from './big-zoo.jade';

document.registerElement('big-zoo', class extends Component {
  get config() {
    return {
      template: zooTemplate,
      defaultState: {
        buttons: ['llama', 'doge'],
        animals: [],
      },
    };
  }
});

document.registerElement('animal-button', class extends Component {
  get config() {
    return {
      template: buttonTemplate,
      helpers: {
        addAnimal: () => this.update({animals: this.state.animals.concat(this.animal)}),
      }
    };
  }

  get animal() {
    return this.getAttribute('animal');
  }
});
