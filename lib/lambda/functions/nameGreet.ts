import * as lambda from "aws-cdk-lib/aws-lambda"
import { Construct } from "constructs"
import * as path from "path"

import { DEFAULT_FOLDER_PATH, DEFAULT_HANDLER_PATH } from "../utils"

export const nameGreetLambda = (scope: Construct): lambda.Function => {
  return new lambda.Function(scope, "nameGreetLambda", {
    runtime: lambda.Runtime.NODEJS_22_X,
    code: lambda.Code.fromAsset(path.join(__dirname, DEFAULT_FOLDER_PATH, "/nameGreet")),
    handler: DEFAULT_HANDLER_PATH,
  })
}
