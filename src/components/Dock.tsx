import { FC, Fragment } from "react";
import { useStore } from "@/store";
import { DockMenu } from "@/shared/constants";
import Window from "./window/Window";

const Dock: FC = () => {
  const increaseMaxWindowId = useStore((state) => state.increaseMaxWindowId);
  const changeWindowId = useStore((state) => state.changeWindowId);

  const maxWindowId = useStore((state) => state.maxWindowId);
  const windowList = useStore((state) => state.windowList);

  const clickHandler = (name: string) => {
    const item = DockMenu.find((i) => i.name === name);
    if (item?.type === "link") {
      window.open(item.link);
    } else if (item?.type === "iframe") {
      openApp(item.name);
    }
  };

  const openApp = (name: string) => {
    increaseMaxWindowId();
    changeWindowId({
      name,
      value: maxWindowId,
    });
  };

  return (
    <div className="dock-wrapper">
      <div className="dock widget-dock">
        {DockMenu.map((item) => (
          <div className="item group relative" key={item.name}>
            <span className="hidden absolute bottom-28 -left-1 text-center w-32 group-hover:inline text-white bg-black/50 rounded-md">
              {item.name}
            </span>
            <img
              className="dock-icon w-14 p-1 h-auto rounded-md cursor-pointer transition-all duration-300 origin-top-1/2 group-hover:scale-200 group-hover:mx-8"
              src={item.icon}
              alt=""
              onClick={() => clickHandler(item.name)}
            />
          </div>
        ))}
      </div>

      <Window item={DockMenu[3]} />
    </div>
  );
};

export default Dock;
