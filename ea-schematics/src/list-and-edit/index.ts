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

  let source: any;

  return chain([
    (_tree: Tree, context: SchematicContext) => {
      // Show the options for this Schematics.
      context.logger.info('options: ' + JSON.stringify(options));
      const yaml = require('js-yaml');
      const buffer = _tree.read(options.config);
      context.logger.info('buffer: ' + buffer);
      source = yaml.load(buffer);
      context.logger.info(JSON.stringify(source, null, 2));
      context.logger.info('name: '+source.name);
      return _tree;
    },
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('name: '+source.name);
      return _tree;
    },
    mergeWith(apply(url('./files'), [
      template({
        ...stringUtils,
        ...source
      }),
      move(`projects/${options.project}/src/lib`)
    ]))]);
}
