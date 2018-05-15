import {Component} from 'panel';

import template from './template.jade';
import './styles.styl';

customElements.define(`view-welcome`, class extends Component {
  get config() {
    return {
      defaultState: {
        welcomeAnimals: [
          {name: `doge`,    style: {bottom: `-200%`, left:  `5%` }},
          {name: `husky`,   style: {top:    `20%`,   right: `25%`}},
          {name: `raccoon`, style: {bottom: `10%`,   left:  `45%`}},
        ],
        welcomeText: `Welcome to the farm!`,  // dynamic just for demo purposes
      },

      helpers: {
        pluralize: (word, amount) => word + (amount === 1 ? `` : `s`),
      },

      template,
    };
  }
});
