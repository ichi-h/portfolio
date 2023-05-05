import fs from "fs";
import path from "path";
import process from "process";

import dotenv from "dotenv";
import fetch from "node-fetch";
import satori from "satori";

dotenv.config();

globalThis.fetch = fetch;

export const generateOgpSvg = async (title, imageUrl) => {
  const fontData = fs.readFileSync(
    path.join(process.cwd(), "ZenKakuGothicNew-Regular.ttf")
  );

  return await satori(
    {
      type: "div",
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
                backgroundColor: "#ffffffbb",
                color: "#333333",
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
  const works = await fetch(`${process.env.APP_URL}/api/v1/works`).then((r) =>
    r.json()
  );
  await Promise.all(
    works.map(async (work) => {
      const imageUrl = process.env.OGP_IMAGE_URL ?? "";
      const svg = await generateOgpSvg(work.title, imageUrl);
      const dir = path.join(
        process.cwd(),
        `../blog/public/assets/ogp/${work.slug}.svg`
      );
      fs.writeFileSync(dir, svg);
    })
  );
};

main();
