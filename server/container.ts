import * as dependable from 'dependable';
import * as path from 'path';

const container = dependable.container();

const dependencies = [
  ['lodash', 'lodash'],
];

dependencies.forEach(function (val) {
  container.register(val[0], () => {
    return require(val[1]);
  });
});

container.load(path.join(__dirname));

container.register('container', function () {
  return container;
});

export {container};
