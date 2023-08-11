import { getLatestWorkBySlug } from "portfolio-works";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Work } from "portfolio-works";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Work>
) {
  const slug = String(req.query.slug) ?? "";
  const work = await getLatestWorkBySlug(slug, true);
  if (!work) {
    res.status(404);
    res.statusMessage = "Not Found";
    return;
  }
  res.status(200).json(work);
}
