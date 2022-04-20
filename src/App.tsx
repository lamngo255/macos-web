import { FC } from "react";
import { useStore } from "@/store";
import { wallpapers } from "@/shared/constants";
import TopMenu from "@/components/TopMenu";
import Dock from "@/components/Dock";
import Title from "@/components/Title";
import LoadingScreen from "@/components/LoadingScreen";

const App: FC = () => {
  const wallpaperId = useStore((state) => state.wallpaperId);
  const wallpaper = wallpapers[wallpaperId].url;

  return (
    <div className="app w-screen h-screen bg-black">
      <Title value="MacOS Web" />
      <LoadingScreen />
      <img
        id="wallpaper"
        className="h-screen w-screen fixed top-0 left-0 object-cover -z-2 animate-fade-in"
        src={wallpaper}
      />

      <TopMenu />
      <Dock />
    </div>
  );
};

export default App;
