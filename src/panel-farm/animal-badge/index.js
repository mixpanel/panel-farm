import {Component} from 'panel';

import template from './template.jade';
import css from './styles.styl?inline';

customElements.define(`animal-badge`, class extends Component {
  get config() {
    return {
      template,
      css,
      useShadowDom: true,

      helpers: {
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
