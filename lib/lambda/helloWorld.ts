import * as path from "path"
import { Construct } from "constructs"
import * as lambda from "aws-cdk-lib/aws-lambda"

export const helloWorldLambda = (scope: Construct): lambda.Function => {
  return new lambda.Function(scope, "helloWorldLambda", {
    runtime: lambda.Runtime.NODEJS_22_X,
    code: lambda.Code.fromAsset(path.join(__dirname, "../../application/helloWorld")),
    handler: "handler.handler",
  })
}
