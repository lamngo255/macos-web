import { FC, useEffect, useState } from "react";
import { useStore } from "@/store";
import { wallpapers, themes } from "@/shared/constants";
import { createSelector } from "reselect";
import Title from "@/components/Title";
import LoadingScreen from "@/components/LoadingScreen";

const Home: FC = () => {
  const [loading, setLoading] = useState(true);
  const wallpaperId = useStore((state) => state.wallpaperId);
  const wallpaper = wallpapers[wallpaperId].url;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <Title value="Macos Web" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <img
          id="wallpaper"
          className="h-screen w-screen fixed top-0 left-0 object-cover -z-2"
          src={wallpaper}
        />
      )}
    </>
  );
};

export default Home;
