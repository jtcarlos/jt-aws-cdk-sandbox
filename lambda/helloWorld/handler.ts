export const handler = async (): Promise<{ statusCode: number; body: string }> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello world from AWS Lambda integrated with API Gateway!" }),
  }
}
