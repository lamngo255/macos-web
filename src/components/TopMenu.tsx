import { FC } from "react";
import TopMenuLeft from "@/components/TopMenuLeft";

const TopMenu: FC = () => {
  return (
    <div className="top-menu bg-bg h-7 flex justify-between fixed top-0 left-0 right-0 px-2 z-50">
      <TopMenuLeft />
    </div>
  );
};

export default TopMenu;
