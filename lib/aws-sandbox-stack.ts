import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as apigateway from "aws-cdk-lib/aws-apigateway"

import { devStageAPIGateway } from "./apiGateway"
import { helloWorldLambda, nameGreetLambda } from "./lambda"

export class AwsSandboxStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // create API Gateway stack
    const devAPIGateway = devStageAPIGateway(this)

    // create `helloWorld` route
    const helloWorldLambdaFunction = helloWorldLambda(this)
    const helloWorld = devAPIGateway.root.addResource("helloWorld")
    helloWorld.addMethod("GET", new apigateway.LambdaIntegration(helloWorldLambdaFunction))

    // create `nameGreet` route
    const nameGreetLambdaFunction = nameGreetLambda(this)
    const nameGreet = devAPIGateway.root.addResource("nameGreet")
    nameGreet.addMethod("GET", new apigateway.LambdaIntegration(nameGreetLambdaFunction))
  }
}
