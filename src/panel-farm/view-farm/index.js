import {Component} from 'panel';

import template from './template.jade';
import './styles.styl';

customElements.define(`view-farm`, class extends Component {
  get config() {
    return {
      template,
      helpers: {
        addAnimal: animal => this.update({animals: [...this.state.animals, animal]}),
        removeAnimal: idx => this.update({animals: [
          ...this.state.animals.slice(0, idx),
          ...this.state.animals.slice(idx + 1, this.state.animals.length),
        ]}),
      },
    };
  }
});
