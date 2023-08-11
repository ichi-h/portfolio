import { TAGS } from "portfolio-works";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  res.status(200).json(TAGS.map((t) => t as string));
}
