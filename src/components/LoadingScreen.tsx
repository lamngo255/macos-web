import { FC } from "react";

const LoadingScreen: FC = () => {
  return (
    <div className="loading fixed h-screen w-screen bg-black top-0 left-0 z-50 flex flex-col justify-center items-center gap-30-px">
      <i className="bx bxl-apple text-white text-9xl"></i>
      <div className="loading-bar relative w-40 h-1 mt-7 bg-loading rounded">
        <div className="absolute top-0 left-0 w-0 h-1 bg-white rounded animate-loading"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
