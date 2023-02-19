import t from 'tap';
import { css } from './index';


css(`
  div {
    background: red;

    .app {
      color: green;
    }
  }
`);
