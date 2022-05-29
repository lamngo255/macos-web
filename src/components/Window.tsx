import { FC, useState } from "react";
import { useStore } from "@/store";
import { DockItemType } from "@/shared/types";

interface WindowProps {
  item: DockItemType;
}

const Window: FC<WindowProps> = ({ item }) => {
  const [dragging, setDragging] = useState(false);
  const windowIndex = useStore((state) => state.windowList[item.name]);
  const maxWindowIndex = useStore((state) => state.maxWindowId);

  return (
    <div className="window absolute rounded overflow-hidden flex flex-col"></div>
  );
};

export default Window;
