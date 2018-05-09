import {Component} from 'panel';

import template from './template.jade';
import './styles.styl'; // TODO inline

customElements.define(`animal-badge`, class extends Component {
  get config() {
    return {
      template,
    };
  }
});
