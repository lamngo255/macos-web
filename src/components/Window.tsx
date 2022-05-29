import { FC } from "react";
import { useStore } from "@/store";
import { DockItemType } from "@/shared/types";

interface WindowProps {
  item: DockItemType;
}

const Window: FC<WindowProps> = ({ item }) => {
  const windowIndex = useStore((state) => state.windowList[item.name]);
  const maxWindowIndex = useStore((state) => state.maxWindowId);

  return <div className="window"></div>;
};

export default Window;
