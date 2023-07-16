import fs from "fs/promises";
import path from "path";

export const getAllSlugs = () => {
  return fs.readdir(path.join(process.cwd(), "./articles/pages"));
};
