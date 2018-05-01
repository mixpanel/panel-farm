import {Component} from 'panel';

import template from './template.jade';

customElements.define(`view-welcome`, class extends Component {
  get config() {
    return {
      template,
    };
  }
});
