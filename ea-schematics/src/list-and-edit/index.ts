import {
    Rule,
    apply,
    mergeWith,
    template,
    url,
    move,
    Tree,
    SchematicContext,
    SchematicsException
} from "@angular-devkit/schematics";
import { dasherize, classify, camelize } from "@angular-devkit/core/src/utils/strings";

const stringUtils = { dasherize, classify, camelize };

export default function(options: { project: string; entity: string }): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const yaml = require("js-yaml");
        const buffer = tree.read(options.entity);
        const model = yaml.load(buffer);

        if (model === null) {
            throw new SchematicsException(`Model file ${options.entity} does not exist.`);
        }
        // context.logger.info(JSON.stringify(model, null, 2));

        const templateSource = apply(url("./files"), [
            template({
                ...model,
                ...stringUtils
            }),
            move(`projects/${options.project}/src/lib`)
        ]);

        const rule = mergeWith(templateSource);
        return rule(tree, context);
    };
}
