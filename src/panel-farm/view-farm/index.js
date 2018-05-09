import {Component} from 'panel';

import template from './template.jade';
import './styles.styl';

customElements.define(`view-farm`, class extends Component {
  get config() {
    return {
      template,
      helpers: {
        addAnimal: animal => this.update({animals: [...this.state.animals, animal]}),
      },
    };
  }
});
