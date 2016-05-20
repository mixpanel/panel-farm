import { Component } from 'panel';

import template from './animal-button.jade';

document.registerElement('animal-button', class extends Component {
  get config() {
    return {
      defaultState: {animals: []},
      template,
      helpers: {
        addAnimal: () => this.update({animals: this.state.animals.concat(this.animal)}),
      }
    };
  }

  get animal() {
    return this.getAttribute('animal');
  }
});
