import { FC, useState } from "react";
import { useStore } from "@/store";
import { DockItemType } from "@/shared/types";

interface WindowProps {
  item: DockItemType;
}

const Window: FC<WindowProps> = ({ item }) => {
  const [dragging, setDragging] = useState(false);
  const [top, setTop] = useState(item.position?.top ?? 0);
  const [left, setLeft] = useState(item.position?.left ?? 0);

  const windowIndex = useStore((state) => state.windowList[item.name]);
  const maxWindowIndex = useStore((state) => state.maxWindowId);

  return (
    <div
      className="window absolute rounded overflow-hidden flex flex-col"
      style={{
        background: item.background,
        top,
        left,
        zIndex: windowIndex,
        boxShadow:
          windowIndex === maxWindowIndex
            ? "0 0 20px #1d1e1f"
            : "0 0 10px #1d1e1f",
        opacity: windowIndex === -1 ? "0" : "",
        visibility: windowIndex === -1 ? "hidden" : "visible",
      }}
    >
      {item.iframe && (
        <iframe
          src={item.iframe.url}
          width={item.iframe.width}
          height={item.iframe.height}
          frameBorder={0}
          style={{
            pointerEvents:
              dragging || windowIndex !== maxWindowIndex ? "none" : "initial",
          }}
        ></iframe>
      )}
    </div>
  );
};

export default Window;
