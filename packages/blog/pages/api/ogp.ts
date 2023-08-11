import dotenv from "dotenv";
import satori from "satori";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  dotenv.config();

  const title = String(req.query.title ?? "");
  const fontData = await fetch(
    "https://github.com/googlefonts/zen-kakugothic/raw/main/fonts/ttf/ZenKakuGothicNew-Regular.ttf"
  ).then((res) => res.arrayBuffer());

  const generateOgpSvg = async (title: string, imageUrl: string) => {
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
  const imageUrl = process.env.OGP_IMAGE_URL ?? "";
  const svg = await generateOgpSvg(title, imageUrl);
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Vary", "Accept-Encoding");
  res.status(200);
  res.send(svg);
}
