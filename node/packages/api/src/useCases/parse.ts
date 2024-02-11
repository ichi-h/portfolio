type Template =
  | {
      type: "text";
      style: string[];
      text: string;
    }
  | {
      type: "youtube";
      id: string;
    };

export const parseUseCase = async (
  markdown: string,
  mdToHtml: (md: string) => Promise<string>,
) => {
  const docs = await mdToHtml(markdown);
  return docs.replace(/{{([^}]+)}}/g, (value) => {
    const template = JSON.parse(
      value.replace(/{{([^}]+)}}/g, "{$1}"),
    ) as Template;
    if (template.type === "text") {
      const style = template.style.map((s) => `text-${s}`).join(" ");
      if (
        style.includes("center") ||
        style.includes("right") ||
        style.includes("left")
      ) {
        return `<p class="${style}">${template.text}</p>`;
      }
      return `<span class="${style}">${template.text}</span>`;
    }
    if (template.type === "youtube") {
      return `<div class="text-center"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/${template.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe></div>`;
    }
    return value;
  });
};
