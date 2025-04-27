import { IDefaultReturnBody, INameGreetContext } from "../utils/types"

export const handler = async (context: INameGreetContext): Promise<IDefaultReturnBody> => {
  const { name } = context.queryStringParameters

  if (!name)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing required parameters: [name]" }),
    }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello there, ${name}!` }),
  }
}
