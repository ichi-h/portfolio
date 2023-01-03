import { Article } from "@/api/articles/getAllAricles";
import { THEME } from "@/ui/base";
import { Box } from "@/ui/parts/box/box";

interface Props {
  articles: Article[];
}

export const WorksTemplate = (props: Props) => {
  return (
    <Box backgroundColor={THEME.color.mono[900]}>
      <h1>WorksTemplate</h1>
      {props.articles.map((article) => (
        <div key={article.id}>
          <h2>title: {article.title}</h2>
          <p>id: {article.id}</p>
          <p>description: {article.description}</p>
          <p>body: {article.body}</p>
        </div>
      ))}
    </Box>
  );
};
