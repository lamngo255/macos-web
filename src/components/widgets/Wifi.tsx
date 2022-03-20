import { FC, useEffect, useState } from "react";
import classNames from "classnames";

const Wifi: FC = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return (
    <div className="wifi group" tabIndex={0}>
      <button className="widget-label">
        {isOnline ? (
          <i className="text-xl bx bx-wifi"></i>
        ) : (
          <i className="text-xl bx bx-wifi-off"></i>
        )}
      </button>

      <div className="widget-dropdown">
        <div className="flex justify-between">
          <span className="font-bold">Wi-Fi</span>
          <div
            style={{ borderColor: "#7a7a7e", height: "1.4rem" }}
            className={classNames(
              "toggle w-10 h-5 rounded-full border border-solid relative",
              isOnline && "bg-toggle-active group"
            )}
          >
            <div className="circle absolute w-5 h-5 rounded-full bg-white top-0 right-0"></div>
          </div>
        </div>
        <p className="gray text-gray">You are connected to the internet</p>
      </div>
    </div>
  );
};

export default Wifi;
