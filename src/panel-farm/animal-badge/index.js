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


class AnimalBadge extends Component {
  get config() {
    return {
      template,
      css,
      useShadowDom: true,

      helpers: {
        ANIMAL_URLS,
        clickClose: () => {
          this.dispatchEvent(new CustomEvent(`close`));
          this.update();  // firefox hacky hack for animations
        },
        isCloseable: () => this.isAttributeEnabled(`closeable`),
        isEnteringOrExiting: () => this.classList.contains(`inout`),
      },
    };
  }

  connectedCallback() {
    super.connectedCallback(...arguments);
    requestAnimationFrame(() => this.update());  // firefox hacky hack for animations
  }

  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      `animal`,
      `class`,
      `closeable`,
    ];
  }
}

customElements.define(`animal-badge`, AnimalBadge);
