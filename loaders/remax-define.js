const { hostComponents } = require('remax/macro');

const stringifyHostComponents = () =>
  JSON.stringify(
    [...hostComponents.keys()].reduce((obj, key) => {
      obj[key] = {
        alias: (hostComponents.get(key) && hostComponents.get(key).alias) || {},
      };

      return obj;
    }, {})
  );

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }
  console.log('remax-define', stringifyHostComponents());
  return source;
};
