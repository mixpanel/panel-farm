import {Component} from 'panel';

import capybara from './images/capybara.png';
import doge from './images/doge.png';
import husky from './images/husky.png';
import kitty from './images/kitty.png';
import llama from './images/llama.png';
import raccoon from './images/raccoon.png';

import template from './template.jade';
import css from './styles.styl?inline';

const ANIMAL_URLS = {
  capybara,
  doge,
  husky,
  kitty,
  llama,
  raccoon,
};


customElements.define(`animal-badge`, class extends Component {
  get config() {
    return {
      template,
      css,
      useShadowDom: true,

      helpers: {
        ANIMAL_URLS,
        clickClose: () => this.dispatchEvent(new CustomEvent(`close`)),
        isVisible: () => this.classList.contains(`visible`),
      },
    };
  }

  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      `animal`,
      `class`,
    ];
  }
});
