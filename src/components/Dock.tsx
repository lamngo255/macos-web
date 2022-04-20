import { FC, useEffect, useState, MouseEvent } from "react";
import { DockMenu } from "@/shared/constants";

const DEFAULT_ICON_SIZE = 48;

const Dock: FC = () => {
  let dockIcons: NodeListOf<HTMLImageElement>;

  useEffect(() => {
    dockIcons = document.querySelectorAll(".dock-icon");
  }, []);

  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    dockIcons.forEach((elem: HTMLImageElement) => {
      const left =
        elem.getBoundingClientRect().left +
        elem.getBoundingClientRect().width / 2;

      const maxDistance = 300;
      const distance = Math.abs(e.clientX - left);

      let iconSize =
        distance < maxDistance
          ? DEFAULT_ICON_SIZE + (maxDistance - distance) * 0.15 + "px"
          : DEFAULT_ICON_SIZE + "px";
      elem.style.width = iconSize;
    });
  };

  const mouseLeaveHandler = (e: MouseEvent<HTMLDivElement>) => {
    dockIcons.forEach((element: HTMLImageElement) => {
      element.style.width = DEFAULT_ICON_SIZE + "px";
    });
  };

  return (
    <div
      className="dock widget-dock"
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {DockMenu.map((item) => (
        <div className="item" key={item.name}>
          <img
            className="dock-icon w-12 h-auto rounded-md cursor-pointer duration-100"
            src={item.icon}
            alt=""
            onClick={() => (window.location.href = item.link || "")}
          />
        </div>
      ))}
    </div>
  );
};

export default Dock;
