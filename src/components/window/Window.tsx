import { FC, useRef, useState } from "react";
import { useStore } from "@/store";
import { DockItemType } from "@/shared/types";
import { useDraggable } from "@neodrag/react";
import TitleBar from "@/components/window/TitleBar";

interface WindowProps {
  item: DockItemType;
}

const Window: FC<WindowProps> = ({ item }) => {
  // const windowIndex = useStore((state) => state.windowList[item.name]);
  // const maxWindowIndex = useStore((state) => state.maxWindowId);

  return (
    <WindowWrapper item={item}>
      <TitleBar item={item} />

      {item.iframe && (
        <iframe
          src={item.iframe.url}
          width={item.iframe.width}
          height={item.iframe.height}
          frameBorder={0}
        ></iframe>
      )}
    </WindowWrapper>
  );
};

const WindowWrapper: FC<WindowProps> = ({ children, item }) => {
  const windowIndex = useStore((state) => state.windowList[item.name]);
  const maxWindowIndex = useStore((state) => state.maxWindowId);

  const draggableRef = useRef(null);
  useDraggable(draggableRef);

  return (
    <div
      className="window absolute rounded overflow-hidden flex flex-col"
      ref={draggableRef}
      style={{
        background: item.background,
        top: item.position?.top ?? 0,
        left: item.position?.left ?? 0,
        zIndex: windowIndex,
        boxShadow:
          windowIndex === maxWindowIndex
            ? "0 0 20px #1d1e1f"
            : "0 0 10px #1d1e1f",
        opacity: windowIndex === -1 ? "0" : "",
        visibility: windowIndex === -1 ? "hidden" : "visible",
      }}
    >
      {children}
    </div>
  );
};

export default Window;
