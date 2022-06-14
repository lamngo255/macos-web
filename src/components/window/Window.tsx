import { FC } from "react";
import { useStore } from "@/store";
import { DockItemType } from "@/shared/types";
import { Rnd } from "react-rnd";
import TitleBar from "@/components/window/TitleBar";

interface WindowProps {
  item: DockItemType;
}

const Window: FC<WindowProps> = ({ item }) => {
  const windowIndex = useStore((state) => state.windowList[item.name]);
  const maxWindowIndex = useStore((state) => state.maxWindowId);

  return (
    <WindowWrapper item={item}>
      <div
        className="window absolute rounded overflow-hidden flex flex-col"
        style={{
          background: item.background,
          top: item.position?.top,
          left: item.position?.left,
          zIndex: windowIndex,
          boxShadow:
            windowIndex === maxWindowIndex
              ? "0 0 20px #1d1e1f"
              : "0 0 10px #1d1e1f",
          opacity: windowIndex === -1 ? "0" : "",
          visibility: windowIndex === -1 ? "hidden" : "visible",
        }}
      >
        <TitleBar item={item} />

        {item.iframe && (
          <iframe
            src={item.iframe.url}
            width={item.iframe.width}
            height={item.iframe.height}
            frameBorder={0}
          ></iframe>
        )}
      </div>
    </WindowWrapper>
  );
};

const WindowWrapper: FC<WindowProps> = ({ children, item }) => {
  const windowIndex = useStore((state) => state.windowList[item.name]);
  const maxWindowId = useStore((state) => state.maxWindowId);

  const increaseMaxWindowId = useStore((state) => state.increaseMaxWindowId);
  const changeWindowId = useStore((state) => state.changeWindowId);

  const bringToFront = () => {
    increaseMaxWindowId();
    changeWindowId({
      name: item.name,
      value: maxWindowId + 1,
    });
  };

  return (
    <Rnd style={{ zIndex: windowIndex }} onMouseDown={bringToFront}>
      {windowIndex !== 0 && children}
    </Rnd>
  );
};

export default Window;
