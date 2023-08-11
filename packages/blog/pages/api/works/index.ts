import { getAllLatestWorks } from "portfolio-works";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Work } from "portfolio-works";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Work[]>
) {
  const search = String(req.query.search_word ?? "");
  const tags = String(req.query.tags ?? "").split(",");
  const works = await getAllLatestWorks(false, { search, tags });
  res.status(200).json(works);
}
