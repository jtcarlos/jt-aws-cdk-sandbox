import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as apigateway from "aws-cdk-lib/aws-apigateway"

import { helloWorldAPIGateway } from "./apiGateway"
import { helloWorldLambda } from "./lambda"

export class AwsSandboxStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // create `hello world` route
    const helloWorldLambdaFunction = helloWorldLambda(this)
    const helloWorldAPIGatewayRestAPI = helloWorldAPIGateway(this)
    const helloWorld = helloWorldAPIGatewayRestAPI.root.addResource("helloWorld")
    helloWorld.addMethod("GET", new apigateway.LambdaIntegration(helloWorldLambdaFunction))
  }
}
