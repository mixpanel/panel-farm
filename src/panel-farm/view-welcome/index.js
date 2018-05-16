import {Component} from 'panel';

import template from './template.jade';
import './styles.styl';

customElements.define(`view-welcome`, class extends Component {
  get config() {
    return {
      defaultState: {
        welcomeText: `Welcome to the farm!`,  // dynamic just for demo purposes
      },

      helpers: {
        pluralize: (word, amount) => word + (amount === 1 ? `` : `s`),
      },

      template,
    };
  }
});
