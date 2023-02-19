


export const css = (cssString, parsed = {}) => {
  const detectors = {
    class: RegExp(/.[\w-]+/),
    id: RegExp(/#[\w-]+/),
    tagname: RegExp(/[\w-]+/),
    common: RegExp(/\.+/)
  }
  debugger;
  const next = cssString.match(detectors.common);
  console.log(next);
  if (next && next.length) {
    parsed[next] = {};

    if (next.match(detectors.class)) {
      parsed[next] = {};
    }
  }

}
