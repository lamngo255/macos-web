import { FC, useRef, useState } from "react";
import { useStore } from "@/store";
import { DockItemType } from "@/shared/types";

interface WindowProps {
  item: DockItemType;
}

const Window: FC<WindowProps> = ({ item }) => {
  // const windowIndex = useStore((state) => state.windowList[item.name]);
  // const maxWindowIndex = useStore((state) => state.maxWindowId);

  const closeApp = () => {};

  const minimizeWindow = () => {};

  const maximizeWindow = () => {};

  return (
    <WindowWrapper item={item}>
      <div className="header flex p-1 pb-6">
        <div className="actions group inline-flex gap-1 pt-1 pl-1 absolute z-10">
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

        <div
          className="label text-center text-md select-none absolute w-full"
          style={{ color: item.color || "var(--text)" }}
        >
          {item.name}
        </div>
      </div>

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
  const headEl = useRef<HTMLDivElement>(null);

  let dragging = false;
  const [top, setTop] = useState(item.position?.top ?? 0);
  const [left, setLeft] = useState(item.position?.left ?? 0);

  const windowIndex = useStore((state) => state.windowList[item.name]);
  const maxWindowIndex = useStore((state) => state.maxWindowId);

  // const increaseMaxWindowId = useStore((state) => state.increaseMaxWindowId);
  // const changeWindowId = useStore((state) => state.changeWindowId);

  const dragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    dragging = true;

    if (headEl && headEl.current) {
      const target = headEl.current;
      const topDistance = e.clientY - target.getBoundingClientRect().top;
      const leftDistance = e.clientX - target.getBoundingClientRect().left;

      const handler = (e: MouseEvent) => {
        if (dragging && e.clientY > 30 && e.clientY < innerHeight - 30) {
          setTop(`${e.clientY - topDistance}px`);
          setLeft(`${e.clientX - leftDistance}px`);
        }
      };

      window.addEventListener("mousemove", handler);
      window.addEventListener("mouseup", () => {
        dragging = false;
        removeEventListener("mousemove", handler);
      });
    }
  };

  return (
    <div
      className="window absolute rounded overflow-hidden flex flex-col"
      onMouseDown={(e) => dragStart(e)}
      ref={headEl}
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
      {children}
    </div>
  );
};

export default Window;
