import {Component} from 'panel';

import './view-welcome';

import template from './template.jade';

customElements.define(`panel-farm`, class extends Component {
  get config() {
    return {
      defaultState: {
        buttons: [`llama`, `doge`],
        animals: [`capybara`],

        view: `welcome`,
      },
      helpers: {
        NAV_ITEMS: [
          {href: `#welcome`, text: `Welcome `},
          {href: `#farm`, text: `Visit the farm`},
        ],
      },
      template,
    };
  }
});
