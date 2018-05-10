import {Component} from 'panel';

import template from './template.jade';
import './styles.styl';

// animals all get unique IDs so the DOM differ knows they're different
// and doesn't recycle the elements; this makes list animations work
let animalID = 1;

customElements.define(`view-farm`, class extends Component {
  get config() {
    return {
      template,
      helpers: {
        addAnimal: name => this.update({animals: [...this.state.animals, {name, id: animalID++}]}),
        removeAnimal: idx => this.update({animals: [
          ...this.state.animals.slice(0, idx),
          ...this.state.animals.slice(idx + 1, this.state.animals.length),
        ]}),
      },
    };
  }
});
