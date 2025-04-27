import { IDefaultReturnBody } from "../utils/types"

export const handler = async (): Promise<IDefaultReturnBody> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello world from AWS Lambda integrated with API Gateway!" }),
  }
}
