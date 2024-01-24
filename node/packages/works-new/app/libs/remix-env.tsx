import { useEnv } from "@/utils/env";

export const Env = ({ data }: { data: ReturnType<typeof useEnv> }) => {
  const __html = Object.entries(data)
    .map(([key, value]) => `window.${key} = "${value}"`)
    .join(";");

  return <script dangerouslySetInnerHTML={{ __html }} />;
};
