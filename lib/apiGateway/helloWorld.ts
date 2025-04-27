import * as apiGateway from "aws-cdk-lib/aws-apigateway"
import { Construct } from "constructs"

export const helloWorldAPIGateway = (scope: Construct): apiGateway.RestApi => {
  return new apiGateway.RestApi(scope, "helloWorldAPIGateway", {
    restApiName: "Hell World Lambda API Gateway",
    description: "Displays the hello world message from Lambda by accessing it from API Gateway",
    deployOptions: {
      stageName: "dev",
    },
  })
}
