"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import type { Work } from "@/model/work";

import type { HLJSApi } from "highlight.js";
import type { Mermaid } from "mermaid";

const extractLanguage = (html: string) => {
  const codeBlocks = html.match(/<code class="language-[^]+?">/g);
  if (!codeBlocks) return [];
  return codeBlocks
    .map((codeBlock) => {
      const res = codeBlock.match(/language-([^]+?)"/);
      if (!res) return "";
      return res[1];
    })
    .filter(Boolean)
    .filter((lang, i, self) => self.indexOf(lang) === i)
    .filter((lang) => lang !== "mermaid" && lang !== "html");
};

const useHighlight = async (work: Work) => {
  const hljs = useRef<HLJSApi | null>(null);
  const mermaid = useRef<Mermaid | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const languages = extractLanguage(work.body);
  const includeMermaid = work.body.includes('<pre class="mermaid">');

  useLayoutEffect(() => {
    (async () => {
      hljs.current = (await import("highlight.js")).default;

      if (languages.length > 0) {
        Promise.all(
          languages.map(async (lang) => {
            try {
              return await import(
                `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/languages/${lang}.min.js`
              );
            } catch (_) {
              return null;
            }
          }),
        ).then((res) => {
          res.forEach((mod) => {
            if (hljs.current === null) return;
            if (mod)
              hljs.current.registerLanguage(mod.default.name, mod.default);
          });
          setIsLoading(false);
        });
      }
    })();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    hljs.current && languages.length > 0 && hljs.current.highlightAll();
  }, [isLoading]);

  useEffect(() => {
    if (!includeMermaid) return;

    import("mermaid").then((mod) => {
      mermaid.current = mod.default;
      mermaid.current.init();
      mermaid.current.initialize({ startOnLoad: true });
    });
  }, []);
};

export const Highlight = ({ work }: { work: Work }) => {
  useHighlight(work);
  return <></>;
};

export default Highlight;
