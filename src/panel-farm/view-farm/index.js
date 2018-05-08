import {Component} from 'panel';

import template from './template.jade';

customElements.define(`view-farm`, class extends Component {
  get config() {
    return {
      template,
    };
  }
});
