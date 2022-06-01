import { FC } from "react";
import { DockItemType } from "@/shared/types";

interface TitleBarProps {
  item: DockItemType;
}

const TitleBar: FC<TitleBarProps> = ({ item }) => {
  const closeApp = () => {};

  const minimizeWindow = () => {};

  const maximizeWindow = () => {};

  return (
    <div className="header flex p-1 pb-6">
      <div className="actions group inline-flex gap-1 pt-1 pl-1 absolute z-10">
        <span className="action-btn bx bx-x bg-btn-close" onClick={closeApp} />
        <span className="action-btn bg-btn-min" onClick={minimizeWindow}>
          -
        </span>
        <span
          className="action-btn bx bx-expand-alt bg-btn-max"
          onClick={maximizeWindow}
        />
      </div>

      <div
        className="label text-center text-md select-none absolute w-full"
        style={{ color: item.color || "var(--text)" }}
      >
        {item.name}
      </div>
    </div>
  );
};

export default TitleBar;
