import {
  Rule,
  apply,
  mergeWith,
  template,
  url,
  move,
  chain,
  Tree,
  SchematicContext,
} from '@angular-devkit/schematics';
import { dasherize, classify, camelize } from '@angular-devkit/core/src/utils/strings';

const stringUtils = { dasherize, classify, camelize };

export default function (options: any): Rule {

  let sorgente: any;

  return chain([
    (_tree: Tree, context: SchematicContext) => {
      // Show the options for this Schematics.
      context.logger.info('options: ' + JSON.stringify(options));
      const yaml = require('js-yaml');
      const buffer = _tree.read(options.config);
      context.logger.info('buffer: ' + buffer);
      sorgente = yaml.load(buffer);
      context.logger.info(JSON.stringify(sorgente, null, 2));
      context.logger.info('name: '+sorgente.name);
      return _tree;
    },

    mergeWith(apply(url('./files'), [
      template({
        ...stringUtils,
        ...sorgente
      }),
      move(`projects/${options.project}/src/lib`)
    ])),
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('name last: '+sorgente.name);
      return _tree;
    },
    
    ]);
}
