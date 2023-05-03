import { useCustomContext } from "@/lib/react/use-custom-context";
import { TextBox } from "@/ui/parts/form/textbox";
import { Stack } from "@/ui/parts/stack/stack";

import { WorksContext } from "./works-context";

export const WorksSearch = () => {
  const { searchText, setSearchText } = useCustomContext(WorksContext);
  return (
    <Stack justify="center">
      <TextBox
        value={searchText}
        onChange={setSearchText}
        placeholder="検索..."
        width="300px"
      />
    </Stack>
  );
};
