import {Component} from 'panel';

import template from './template.jade';

customElements.define(`animal-badge`, class extends Component {
  get config() {
    return {
      template,
    };
  }
});
