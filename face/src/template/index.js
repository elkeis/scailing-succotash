import _template from 'lodash.template';

const settings = {
  interpolate: /{{([\s\S]+?)}}/g,
};


export const template = (text, opts = {}) => {
  const tpl = _template(text, {
    ...settings,
    ...opts,
  });
  return tpl;
}
