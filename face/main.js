import { html, render } from 'lit';
import { component } from 'haunted';
import { app } from './src/app';
import './main.css';

(async () => {
  const appRoot = document.body.querySelector('main');

  const Main = () => {
    return html`
      ${app()}
    `
  }

  customElements.define('app-render', component(Main, {
    useShadowDOM: false,
  }));

  render(html`<app-render/>`, appRoot);
})();

