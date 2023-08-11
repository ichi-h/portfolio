import fs from "fs";
import path from "path";
import process from "process";

import dotenv from "dotenv";
import { getAllWorks } from "portfolio-works";
import satori from "satori";

dotenv.config();

export const generateOgpSvg = async (title: string, imageUrl: string) => {
  const fontData = fs.readFileSync(
    path.join(process.cwd(), "ZenKakuGothicNew-Regular.ttf")
  );

  return await satori(
    {
      type: "div",
      key: "root",
      props: {
        children: [
          {
            type: "div",
            props: {
              children: [
                {
                  type: "div",
                  props: {
                    children: title,
                    style: {
                      fontSize: "54px",
                      width: "100%",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    children: "ichi-h.com",
                    style: {
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "42px",
                      width: "100%",
                    },
                  },
                },
              ],
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "16px",
                width: "80%",
                height: "60%",
                padding: "32px",
                color: "#fff",
                borderRadius: "16px",
              },
            },
          },
        ],
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageUrl})`,
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Zen Kaku Gothic New",
          data: fontData,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
};

const main = async () => {
  const works = await getAllWorks();
  await Promise.all(
    works.map(async (work) => {
      const imageUrl = process.env.OGP_IMAGE_URL ?? "";
      const svg = await generateOgpSvg(work.title, imageUrl);
      const blogAssetsDir = path.join(process.cwd(), "../blog/public/assets");
      if (!fs.existsSync(path.join(blogAssetsDir, "ogp"))) {
        fs.mkdirSync(path.join(blogAssetsDir, "ogp"));
      }
      if (!fs.existsSync(path.join(blogAssetsDir, "ogp", work.slug))) {
        fs.mkdirSync(path.join(blogAssetsDir, "ogp", work.slug));
      }
      const dir = path.join(
        process.cwd(),
        `../blog/public/assets/ogp/${
          work.slug
        }/${work.createdAt.toISOString()}.svg`
      );
      fs.writeFileSync(dir, svg);
    })
  );
};

main();
