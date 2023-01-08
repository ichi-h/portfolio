import { useCustomContext } from "@/lib/react/useCustomContext";
import { TextBox } from "@/ui/parts/form/textbox";

import { WorksContext } from "./worksContext";

export const WorksSearch = () => {
  const { searchText, setSearchText } = useCustomContext(WorksContext);
  return (
    <TextBox
      value={searchText}
      onChange={setSearchText}
      placeholder="検索..."
      width="300px"
    />
  );
};
