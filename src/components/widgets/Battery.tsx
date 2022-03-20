import { FC, useEffect, useState } from "react";

const myNavigator = navigator as any;

const Wifi: FC = () => {
  const [percentage, setPercentage] = useState("");

  useEffect(() => {
    if (myNavigator.getBattery) {
      myNavigator.getBattery().then((battery: any) => {
        setPercentage(Math.round(battery.level * 100) + "%");
        battery.addEventListener("levelchange", function () {
          setPercentage(Math.round(battery.level * 100) + "%");
        });
      });
    } else {
      setPercentage("Unknown");
    }
  }, []);

  return (
    <div className="battery relative group" tabIndex={0}>
      <button className="widget-label">
        <i className="text-xl bx bxs-battery-low"></i>
      </button>

      <div className="widget-dropdown">
        <div className="flex justify-between">
          <span className="font-bold">Battery</span>
          <span className="text-gray">{percentage}</span>
        </div>
        <p className="gray text-gray -mt-3">Power Source: Battery</p>
      </div>
    </div>
  );
};

export default Wifi;
