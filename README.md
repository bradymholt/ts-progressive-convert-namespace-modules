# ts-progressive-convert-namespace-modules

This repository demonstrates how to progressively convert a TypeScript library that uses global namespaces over to using modules.

The [src/entry.m.ts](https://github.com/bradymholt/ts-progressive-convert-namespace-modules/blob/master/src/entry.m.ts) file is the main [entry point](https://github.com/bradymholt/ts-progressive-convert-namespace-modules/blob/master/webpack.config.js#L6) in the webpack config. This file calls namespaced code and also import
a module shim that runs namcespaced code. Progressively, namespaced code can be shimmied and then the namespaced code eventually folded directly into the modules.
