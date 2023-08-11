import { getAllLatestWorks } from "portfolio-works";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Work } from "portfolio-works";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Work[]>
) {
  const works = await getAllLatestWorks(false);
  res.status(200).json(works);
}
