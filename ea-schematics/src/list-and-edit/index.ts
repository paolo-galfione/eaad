import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  template,
  url,
  move,
} from '@angular-devkit/schematics';
import { dasherize, classify, camelize } from '@angular-devkit/core/src/utils/strings';


const stringUtils = { dasherize, classify, camelize };

// Instead of `any`, it would make sense here to get a schema-to-dts package and output the
// interfaces so you get type-safe options.
export default function (options: any): Rule {
  // The chain rule allows us to chain multiple rules and apply them one after the other.
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      // Show the options for this Schematics.
      context.logger.info('My Full Schematic: ' + JSON.stringify(options));
    },

    mergeWith(apply(url('./files'), [
      template({
        ...stringUtils,
        name: options.name,
      }),
      move(`projects/${options.project}/src/lib`)
    ])),
    
  ]);
}
