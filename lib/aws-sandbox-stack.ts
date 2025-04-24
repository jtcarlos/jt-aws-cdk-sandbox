import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"

import * as lambda from "aws-cdk-lib/aws-lambda"
import * as apigateway from "aws-cdk-lib/aws-apigateway"
import * as path from "path"

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsSandboxStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const helloWorldLambda = new lambda.Function(this, "helloWorldLambdaHandler", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset(path.join(__dirname, "../lambda/helloWorld")),
      handler: "handler.handler",
    })

    const helloWorldAPIGateway = new apigateway.RestApi(this, `helloWorldApi`, {
      restApiName: "Hello World Lambda API",
      description: "Displays the hello world message from Lambda by accessing it's API Gateway URL",
      deployOptions: {
        stageName: "dev",
      },
    })

    const helloWorld = helloWorldAPIGateway.root.addResource("helloWorld")
    helloWorld.addMethod("GET", new apigateway.LambdaIntegration(helloWorldLambda))

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'JtAwsSandboxQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
