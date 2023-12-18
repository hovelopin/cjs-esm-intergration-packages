import { build , analyzeMetafile } from "esbuild";

const baseConfig = {
  entryPoints : ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  sourcemap : true,
}

Promise.all([
  build({
    ...baseConfig,
    format:"cjs",
    outExtension: {
      ".js" : ".cjs",
    },
    treeShaking: true,
  }),

  build({
    ...baseConfig,
    format: "esm",
    treeShaking: true,
    pure: ['console.log'],
    minify:true,
  }),
]);
