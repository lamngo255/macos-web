import { FC } from "react";
import Wifi from "@/components/widgets/Wifi";
import Battery from "@/components/widgets/Battery";
import Date from "@/components/widgets/Date";

const TopMenuRight: FC = () => {
  return (
    <div className="right-menu flex items-center h-full">
      <Wifi />
      <Battery />
      <Date />
    </div>
  );
};

export default TopMenuRight;
