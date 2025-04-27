import * as apiGateway from "aws-cdk-lib/aws-apigateway"
import { Construct } from "constructs"

import { stages } from "../utils"

export const devStageAPIGateway = (scope: Construct): apiGateway.RestApi => {
  return new apiGateway.RestApi(scope, "devAPIGateway", {
    restApiName: "Dev",
    description: "Rest API Gateway for dev",
    deployOptions: {
      stageName: stages.dev,
    },
  })
}
