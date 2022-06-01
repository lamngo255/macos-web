import { FC } from "react";
import { useStore } from "@/store";
import { DockItemType } from "@/shared/types";
import { Rnd } from "react-rnd";
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

  return (
    <Rnd
      default={{
        x: 150,
        y: 205,
        width: 600,
        height: 190,
      }}
    >
      <div
        className="window absolute rounded overflow-hidden flex flex-col"
        style={{
          background: item.background,
          top: 200,
          left: 300,
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
    </Rnd>
  );
};

export default Window;
