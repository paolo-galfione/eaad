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
import * as fs from 'fs';

const stringUtils = { dasherize, classify, camelize };

export default function (options: any): Rule {

  const buffer = fs.readFileSync(options.config);
  const yaml = require('js-yaml');
  const source = yaml.load(buffer);

  return chain([
    (_tree: Tree, context: SchematicContext) => {
      // Show the options for this Schematics.
      context.logger.info('options: ' + JSON.stringify(options));
      context.logger.info('source: ' + JSON.stringify(source, null, 2));
    },
    mergeWith(apply(url('./files'), [
      template({
        ...stringUtils,
        ...source
      }),
      move(`projects/${options.project}/src/lib`)
    ]))]);
}
