import { FC } from "react";
import Wifi from "@/components/widgets/Wifi";

const TopMenuRight: FC = () => {
  return (
    <div className="right-menu flex items-center h-full">
      <Wifi />
    </div>
  );
};

export default TopMenuRight;
