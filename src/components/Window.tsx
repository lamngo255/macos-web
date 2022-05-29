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

  const closeApp = () => {};

  const minimizeWindow = () => {};

  const maximizeWindow = () => {};

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
      <div className="header flex flex-1 p-1 w-full">
        <div className="actions group flex gap-1 pt-1 pl-1">
          <span
            className="action-btn bx bx-x bg-btn-close"
            onClick={() => closeApp()}
          ></span>
          <span className="action-btn bg-btn-min" onClick={minimizeWindow}>
            -
          </span>
          <span
            className="action-btn bx bx-expand-alt bg-btn-max"
            onClick={maximizeWindow}
          ></span>
        </div>
        <div className="label text-center text-md select-none">{item.name}</div>
      </div>

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
