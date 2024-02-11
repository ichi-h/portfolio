import satori from "satori";

export const ogpUseCase = async (title: string, imageUrl: string) => {
  const fontData = await fetch(
    "https://github.com/googlefonts/zen-kakugothic/raw/main/fonts/ttf/ZenKakuGothicNew-Regular.ttf",
  ).then((res) => res.arrayBuffer());

  const generateOgpSvg = async () =>
    await satori(
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
                      style: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "115%",
                        height: "70%",
                        backgroundColor: "#FCFCFC",
                        opacity: "0.9",
                        borderRadius: "16px",
                      },
                    },
                  },
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
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "70%",
                  color: "#1A1A1A",
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
      },
    );
  return await generateOgpSvg();
};
