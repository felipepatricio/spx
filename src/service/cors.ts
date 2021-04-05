import Cors from "cors";
import initMiddleware from "../lib/init-middleware";
import { NextApiRequest, NextApiResponse } from "next";

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  await cors(request, response)

  response.json({ message: 'Hello Everyone!' })
}
