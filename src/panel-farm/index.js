import {Component} from 'panel';

import './animal-badge';
import './view-welcome';
import './view-farm';

import template from './template.jade';
import './styles.styl';

class PanelFarm extends Component {
  get config() {
    return {
      defaultState: {
        buttons: [`llama`, `doge`, `kitty`, `raccoon`, `husky`],
        animals: [{name: `capybara`, id: 0}],

        view: `welcome`,
      },
      helpers: {
        NAV_ITEMS: [
          {view: `welcome`, text: `Welcome `},
          {view: `farm`, text: `Visit the farm`},
        ],
      },
      routes: {
        'welcome': () => ({view: `welcome`}),
        'farm':    () => ({view: `farm`}),
        '':        `welcome`,
      },
      template,
    };
  }
}

customElements.define(`panel-farm`, PanelFarm);
