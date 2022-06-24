import { StorageStack } from "./StorageStack";
import { ApiStack } from "./ApiStack";

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  //all the imports are chained below
  app.stack(StorageStack).stack(ApiStack); 
}