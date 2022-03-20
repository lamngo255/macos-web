import { FC } from "react";
import Wifi from "@/components/widgets/Wifi";
import Battery from "@/components/widgets/Battery";

const TopMenuRight: FC = () => {
  return (
    <div className="right-menu flex items-center h-full">
      <Wifi />
      <Battery />
    </div>
  );
};

export default TopMenuRight;
