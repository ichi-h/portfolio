import { css } from "linaria";

import { THEME } from "@/ui/base";

const articleMdStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${THEME.size.lg};
  width: 100%;
  font-size: ${THEME.size.lg};
  color: ${THEME.color.mono["000"]};
  h2 {
    font-size: ${THEME.size.xl4};
    @media only screen and (max-width: ${THEME.breakPoint.md}px) {
      font-size: ${THEME.size.xl3};
    }
  }
  h3 {
    font-size: ${THEME.size.xl3};
    @media only screen and (max-width: ${THEME.breakPoint.md}px) {
      font-size: ${THEME.size.xl2};
    }
  }
  h4 {
    font-size: ${THEME.size.xl2};
    @media only screen and (max-width: ${THEME.breakPoint.md}px) {
      font-size: ${THEME.size.xl};
    }
  }
  h5 {
    font-size: ${THEME.size.xl};
    @media only screen and (max-width: ${THEME.breakPoint.md}px) {
      font-size: ${THEME.size.lg};
    }
    text-decoration: underline;
    margin: 0;
  }
  ul {
    margin: 0;
  }
  img {
    margin: 0 auto;
  }
  a {
    color: ${THEME.color.blue[500]};
    text-decoration: underline;
  }
  blockquote {
    background-color: ${THEME.color.mono[700]};
    border-left: ${THEME.size.xs2} solid ${THEME.color.mono[500]};
    padding: ${THEME.size.xs};
    box-shadow: ${THEME.color.shadow["000"]};
  }
  .text {
    &-center {
      text-align: center;
    }
    &-right {
      text-align: right;
    }
    &-left {
      text-align: left;
    }
    &-blue {
      color: ${THEME.color.blue[500]};
    }
    &-red {
      color: ${THEME.color.red[500]};
    }
    &-gray {
      color: ${THEME.color.mono[300]};
    }
    &-bold {
      font-weight: bold;
    }
    &-underline {
      text-decoration: underline;
    }
    ${Object.entries(THEME.size)
      .map(([key, value]) => `&-${key} { font-size: ${value}; }`)
      .join()}
  }
  iframe[src*="youtube.com"] {
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 16 / 9;
    max-width: 700px;
  }
`;

interface Props {
  html: string;
}

export const ArticleHtml = ({ html }: Props) => {
  return (
    <div
      className={articleMdStyle}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
